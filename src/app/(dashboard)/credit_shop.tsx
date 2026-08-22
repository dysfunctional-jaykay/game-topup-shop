import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedPressableCard from '../../../components/ThemedPressableCard'

const credit_shop = () => {
  return (
    <ThemedView safe={true} style={{    
      flexDirection: "row",
      flexWrap: "wrap",
      }}>
      <ThemedPressableCard cardTitle='100 Credits' cardIconPath={require('../../../assets/game-icons/r1999-icon.webp')} />
      <ThemedPressableCard cardTitle='200 Credits' cardIconPath={require('../../../assets/game-icons/mobile-legends-icon.jpg')} />
    </ThemedView>
  )
}

export default credit_shop

const styles = StyleSheet.create({})