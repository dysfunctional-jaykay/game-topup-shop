import { StyleSheet, Text, View } from 'react-native'
import { Link, Redirect } from 'expo-router'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedLoader from '../../components/ThemedLoader'


const index = () => {
  return (
    

    <ThemedView style={styles.container}>
      <Redirect href='/topup' />

      <ThemedLoader />

      {/* <View style={styles.container}>
        <ThemedText></ThemedText>
        <Link href="/login" style={styles.link}>
          <ThemedText>
            Login Page
          </ThemedText>
        </Link>
        <Link href="/register" style={styles.link}>
          <ThemedText>
            Register Page
          </ThemedText>
        </Link>
        <Link href="/profile" style={styles.link}>
          <ThemedText>
            Profile Page
          </ThemedText>
        </Link>
      </View> */}
    </ThemedView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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