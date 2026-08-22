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
    <ThemedView safe={true} style={styles.container}>
      <ThemedTopBar>
        <ThemedText style={styles.title}>
          Receipts
        </ThemedText>
        <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />
      </ThemedTopBar>
    </ThemedView>
  )
}

export default Receipts

const styles = StyleSheet.create({
  container: {
    flex: 1,
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