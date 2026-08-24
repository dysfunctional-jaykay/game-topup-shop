import { StyleSheet, FlatList, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useProduct } from '../../../../hooks/useProducts'
import { getIcon } from '../../../../lib/getIcon'
import { useUser } from '../../../../hooks/useUser'

// Import components
import ThemedView from '../../../../components/ThemedView'
import Spacer from '../../../../components/Spacer'
import ThemedText from '../../../../components/ThemedText'
import ThemedButton from '../../../../components/ThemedButton'
import ThemedPressableCard from '../../../../components/ThemedPressableCard'
import ThemedBadge from '../../../../components/ThemedBadge'
import ThemedTopBar from '../../../../components/ThemedTopBar'

const ViewProduct = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    const { product, fetchProductsByGameId } = useProduct()
    const { userInfo, logout, user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (id) fetchProductsByGameId(id)
    }, [id])
    
    return (
        <ThemedView style={{flex: 1}} safe={true}>
            <ThemedTopBar>
                <ThemedText style={styles.title}>
                    Products
                </ThemedText>
                <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />
            </ThemedTopBar>
            <FlatList
                data={product}
                numColumns={2}
                keyExtractor={(item) => item.$id}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
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
    listContainer: {
        paddingHorizontal: 18,
        alignItems: 'center',
    },
    row: {
        justifyContent: 'flex-start',   
        gap: 10,                
        marginBottom: 5,  
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
})