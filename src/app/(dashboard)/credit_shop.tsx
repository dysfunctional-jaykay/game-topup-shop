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

const CreditShop = () => {
  const { userInfo } = useUser()
  const router = useRouter();

  const tokenIcon = require('../../../assets/product-img/token-box-icon.jpg')

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedTopBar>
        <ThemedText style={styles.title}>
          Buy Credits
        </ThemedText>
        <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />
      </ThemedTopBar>
      <ThemedView style={styles.cardContainer}>
        <ThemedPressableCard onPress={() => router.push('/purchase/credit200')} cardTitle='250' cardIconPath={tokenIcon} />
        <ThemedPressableCard cardTitle='500' cardIconPath={tokenIcon} />
      </ThemedView>
    </ThemedView>
  )
}

export default CreditShop

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