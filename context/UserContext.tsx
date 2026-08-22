import { createContext, useState, useEffect, type ReactNode } from 'react'
import { account } from '../lib/appwrite'
import { ID, Models } from 'react-native-appwrite'

type UserContextType = {
    user: Models.User | null
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    authChecked: boolean
}

export const UserContext = createContext<UserContextType>({
    user: null,

    login: async () => {},

    register: async () => {},

    logout: async () => {},

    authChecked: false,
})

type UserProviderProps = {
    children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<Models.User | null>(null)
    const [authChecked, setAuthChecked] = useState(false)


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

    async function register(email: string, password: string) {
        try {
            await account.create({
                userId: ID.unique(), 
                email: email, 
                password: password})

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

    useEffect(() => {
        getInitialUserValue()
    }, []) // Only runs once

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                authChecked,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}