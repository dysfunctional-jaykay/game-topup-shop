import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useProduct } from '../../../../hooks/useProducts'
import { Product } from '../../../../context/ProductContext'

// Import components
import ThemedView from '../../../../components/ThemedView'
import Spacer from '../../../../components/Spacer'
import ThemedText from '../../../../components/ThemedText'
import ThemedButton from '../../../../components/ThemedButton'

const PurchaseScreen = () => {
    const [product, setProduct] = useState<Product | undefined>() 

    const { id } = useLocalSearchParams<{ id: string }>()
    const {fetchProductById} = useProduct()

    useEffect(() => {
        async function loadProduct() {
            const productData = await fetchProductById(id)
            // console.log(productData)
            setProduct(productData)
        }
        loadProduct()
    }, [id])

    // Probably make this a modal instead... maybe
    return (
        <ThemedView style={{flex: 1}} safe={true}>
            <ThemedText>Purchase {product?.name ?? 'Loading...'}</ThemedText>
        </ThemedView>
    )
}

export default PurchaseScreen

const styles = StyleSheet.create({})