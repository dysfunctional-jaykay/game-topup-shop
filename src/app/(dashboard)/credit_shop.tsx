import { StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useUser } from '../../../hooks/useUser'

import ThemedView from '../../../components/ThemedView'
import ThemedPressableCard from '../../../components/ThemedPressableCard'

import ThemedBadge from '../../../components/ThemedBadge'
import ThemedTopBar from '../../../components/ThemedTopBar'
import ThemedText from '../../../components/ThemedText'

const CreditShop = () => {
  const { user, userInfo, addCredit, subtractCredit } = useUser()
  const router = useRouter()
  const userId = user?.$id

  const tokenIcon = require('../../../assets/product-img/token-box-icon.jpg')

  const handleAddCredit = (amount: number) => {
    if (!userId) {
        router.push('/login')
        return
    }

    addCredit(userId, amount)
  }

  const handleSubtractCredit = (amount: number) => {
    if (!userId) {
        router.push('/login')
        return
    }

    subtractCredit(userId, amount)
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedTopBar>
        <ThemedText style={styles.title}>
          Buy Credits
        </ThemedText>
        <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />
      </ThemedTopBar>
      <ThemedView style={styles.cardContainer}>
        <ThemedPressableCard onPress={() => handleAddCredit(250)} cardTitle='250 Credits' cardIconPath={tokenIcon} />
        <ThemedPressableCard onPress={() => handleAddCredit(250)} cardTitle='500 Credits' cardIconPath={tokenIcon} />
        <ThemedPressableCard onPress={() => handleSubtractCredit(250)} cardTitle='-250 Credits' cardIconPath={tokenIcon} />
        <ThemedPressableCard onPress={() => handleSubtractCredit(500)} cardTitle='-500 Credits' cardIconPath={tokenIcon} />
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