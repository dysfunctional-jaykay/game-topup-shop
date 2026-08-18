import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../../../components/ThemedView'
import ThemedPressableCard from '../../../components/ThemedPressableCard'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'

const register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Register an account
      </ThemedText>

      <Spacer height={100} />
      <Link href={'/login'}>
        <ThemedText style={{textAlign: 'center'}}>
          Already have an account? Login now
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  }
})