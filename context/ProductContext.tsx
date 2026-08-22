import { createContext, useState, type ReactNode, useEffect } from 'react'
import { databases } from '../lib/appwrite'
import { Query } from 'react-native-appwrite'

const DATABASE_ID = '6a890bae0008bc68146a'
const TABLE_ID = 'products'

export type Product = {
    $id: string,
    name: string,
    productPrice: number,
    description: string,
    iconField: string,
    gameId: string,
}

type ProductContextType = {
    product: Product[]
    error: string | null
    fetchProducts: () => Promise<void>
    fetchProductById: (id: string) => Promise<Product | undefined>
    fetchProductsByGameId: (gameId: string) => Promise<void>
}

export const ProductContext = createContext<ProductContextType>({
    product: [],
    error: null,

    fetchProducts: async () => {},
    fetchProductById: async () => {},
    fetchProductsByGameId: async () => {},
})

type ProductsProviderProps = {
    children: ReactNode
}

export function ProductProvider({ children }: ProductsProviderProps){
    const [product, setProduct] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null)

    async function fetchProducts() {
        setError(null)

        try {
            const response = await databases.listRows({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                queries: [
                    Query.orderAsc('name'),
                ]
            })

            const productList = response.rows as unknown as Product[]

            setProduct(productList)

        } catch (error) {
            console.log('Failed to fetch products:', error)

            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError('Failed to fetch products')
            }
        } 
    }

    async function fetchProductById(id: string) {
        try {
            const response = await databases.getRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: id,
            })

            return response as unknown as Product

        } catch(error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError('Failed to fetch products')
            }
        }
    }

    async function fetchProductsByGameId(gameId: string) {
        setError(null)

        try {
            const response = await databases.listRows({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                queries: [
                    Query.equal('gameId', gameId),
                    Query.orderAsc('name'),
                ]
            })

            const productList = response.rows as unknown as Product[]
            setProduct(productList)

        } catch (error) {
            console.log('Failed to fetch products by game:', error)
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError('Failed to fetch products')
            }
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{
            product,
            fetchProducts,
            fetchProductById,
            fetchProductsByGameId,
            error,
        }}>
            {children}
        </ProductContext.Provider>
    )
}