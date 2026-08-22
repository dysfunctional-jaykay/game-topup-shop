import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useUser } from '../../../hooks/useUser'
import { User } from '../../../context/UserContext'

import ThemedView from '../../../components/ThemedView'
import ThemedPressableCard from '../../../components/ThemedPressableCard'

import ThemedBadge from '../../../components/ThemedBadge'
import ThemedTopBar from '../../../components/ThemedTopBar'
import ThemedText from '../../../components/ThemedText'

const Topup = () => {
  const { userInfo } = useUser()
  const router = useRouter();

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedTopBar>
        <ThemedText style={styles.title}>
            EXP Shop
        </ThemedText>
        <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />
      </ThemedTopBar>
      <ThemedView style={styles.cardContainer}>
        <ThemedPressableCard onPress={() => router.push('/view_products/r1999')} cardTitle='Reverse: 1999' cardIconPath={require('../../../assets/game-icons/r1999-icon.webp')} />
        <ThemedPressableCard cardTitle='Mobile Legends: Bang Bang' cardIconPath={require('../../../assets/game-icons/mobile-legends-icon.jpg')} />
      </ThemedView>
    </ThemedView>
  )
}

export default Topup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});