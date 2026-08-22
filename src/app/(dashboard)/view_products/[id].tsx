import { StyleSheet, FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useProduct } from '../../../../hooks/useProducts'
import { getIcon } from '../../../../lib/getIcon'

// Import components
import ThemedView from '../../../../components/ThemedView'
import Spacer from '../../../../components/Spacer'
import ThemedText from '../../../../components/ThemedText'
import ThemedButton from '../../../../components/ThemedButton'
import ThemedPressableCard from '../../../../components/ThemedPressableCard'

const ViewProduct = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    const { product, fetchProductsByGameId } = useProduct()
    const router = useRouter()

    useEffect(() => {
        if (id) fetchProductsByGameId(id)
    }, [id])
    
    return (
        <ThemedView>
            <ThemedText>Products of {id}</ThemedText>
            <FlatList
                data={product}
                numColumns={2}
                keyExtractor={(item) => item.$id}
                contentContainerStyle={styles.cardContainer}
                renderItem={({item}) => (
                
                <ThemedPressableCard 
                    onPress={() => router.push(`/purchase/${item.$id}`)} 
                    cardTitle={item.name} 
                    cardIconPath={getIcon(item.iconField)}
                />
            )} 
            />
        </ThemedView>
    )
}

export default ViewProduct

const styles = StyleSheet.create({
    cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 7,
    gap: 10,
  },
})