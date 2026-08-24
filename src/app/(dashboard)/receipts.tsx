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

const Receipts = () => {
  const { userInfo } = useUser()

  return (
    <ThemedView safe={true} style={{flex: 1}}>
      <ThemedTopBar>
        <ThemedText style={styles.title}>
          Receipts
        </ThemedText>
        <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />
      </ThemedTopBar>
      <ThemedView style={styles.container}>
        <ThemedText style={{fontSize: 30}}>
          No receipts yet...
        </ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

export default Receipts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});