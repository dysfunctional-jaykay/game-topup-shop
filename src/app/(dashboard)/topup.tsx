import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useProduct } from '../../../hooks/useProducts'
import { useRouter } from 'expo-router'

import ThemedView from '../../../components/ThemedView'
import ThemedPressableCard from '../../../components/ThemedPressableCard'

const topup = () => {
  const { product } = useProduct()
  const router = useRouter()

  return (
    <ThemedView safe={true} style={[{    
        flexDirection: "row",
        flexWrap: "wrap",
    }]}>
      <ThemedPressableCard onPress={() => router.push('/view_products/r1999')} cardTitle='Reverse: 1999' cardIconPath={require('../../../assets/game-icons/r1999-icon.webp')} />
      <ThemedPressableCard cardTitle='Mobile Legends: Bang Bang' cardIconPath={require('../../../assets/game-icons/mobile-legends-icon.jpg')} />
    </ThemedView>
  )
}

export default topup

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 7,
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});