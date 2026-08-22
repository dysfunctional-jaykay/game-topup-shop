import { createContext, useState, useEffect, type ReactNode } from 'react'
import { account } from '../lib/appwrite'
import { ID, Models } from 'react-native-appwrite'
import { databases } from '../lib/appwrite'
import { Query } from 'react-native-appwrite'

const DATABASE_ID = '6a890bae0008bc68146a'
const TABLE_ID = 'accounts'

export type User = {
    username: string,
    credits: number,
}

type UserContextType = {
    user: Models.User | null
    userInfo: User | undefined
    login: (email: string, password: string) => Promise<void>
    register: (username:string, email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    fetchUserInformation: (id: string) => Promise<User | undefined>
    authChecked: boolean
}

export const UserContext = createContext<UserContextType>({
    user: null,

    userInfo: undefined,

    login: async () => {},

    register: async () => {},

    logout: async () => {},

    fetchUserInformation: async () => undefined,

    authChecked: false,
})

type UserProviderProps = {
    children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<Models.User | null>(null)
    const [userInfo, setUserInfo] = useState<User | undefined>()
    const [authChecked, setAuthChecked] = useState(false)

    const userId = user?.$id

    async function login(email: string, password: string) {
        try {
            await account.createEmailPasswordSession({
                email: email, 
                password: password})
            const response = await account.get()
            setUser(response)
        } catch (error) {
            if(error instanceof Error){
                throw Error(error.message)
            } else {
                throw Error('An unexpected error occured')
            }
        }
    }

    async function register(username:string, email: string, password: string) {
        try {
            const newUser = await account.create({
                userId: ID.unique(),
                email: email,
                password: password,
            })

            await databases.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: newUser.$id,
                data: {
                    email: newUser.email,
                    username: username,
                    credits: 0,
                },
            })

            await login(email, password)
        } catch (error) {
            if(error instanceof Error){
                throw Error(error.message)
            } else {
                throw Error('An unexpected error occured')
            }
        }
    }

    async function logout() {
        try {
            await account.deleteSession({
                sessionId: 'current',
            })

            setUser(null)

            console.log('Logout successful')
        } catch (error) {
            console.log('Logout failed:', error)
        }
    }

    async function fetchUserInformation(id: string) {
        try {
            const response = await databases.getRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: id,
            })

            return response as unknown as User

        } catch(error) {
            if (error instanceof Error) {
                throw Error(error.message)
            } else {
                throw Error('An unexpected error occured')
            }
        }
    }

    async function updateUserInformation(id: string, newUsername: string) {
        try {
            const response = await databases.updateRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: id,
                data: {
                    username: newUsername,
                }
            })

            return response as unknown as User

        } catch(error) {
            if (error instanceof Error) {
                throw Error(error.message)
            } else {
                throw Error('An unexpected error occured')
            }
        }
    }

    async function updateCredit(id: string, credit: number) {
        try {
            const response = await databases.updateRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: id,
                data: {
                    credits: +credit,
                }
            })

            return response as unknown as User

        } catch(error) {
            if (error instanceof Error) {
                throw Error(error.message)
            } else {
                throw Error('An unexpected error occured')
            }
        }
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get()
            setUser(response)
        } catch (error) {
            setUser(null)
        } finally {
            setAuthChecked(true)
        }
    }

    async function getUserInfo(){
        if (!userId) {
            setUserInfo(undefined)
            return
        }
        const id = userId

        async function loadInformation() {
            const userData = await fetchUserInformation(id)
            setUserInfo(userData)
        }
        loadInformation()
    }

    useEffect(() => {
        getInitialUserValue()
        getUserInfo()
    }, [userId]) // Only runs once

    return (
        <UserContext.Provider
            value={{
                user,
                userInfo,
                login,
                register,
                logout,
                fetchUserInformation,
                authChecked,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}