import { StyleSheet, Text, View, Image, ImageSourcePropType, ImageStyle, StyleProp, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedPressableCard from '../../components/ThemedPressableCard'

const index = () => {
  return (
    <ThemedView>
      <ThemedPressableCard cardTitle='Reverse: 1999' cardIconPath={require('../../assets/game-icons/r1999-icon.png')} />
      <ThemedPressableCard cardTitle='Reverse: 1999' cardIconPath={require('../../assets/game-icons/r1999-icon.png')} />
      <Text style={styles.title}>Time to cram</Text>
      <Text style={{marginTop: 20, marginBottom: 20}}>Goodbye to sleep</Text>
      
      <Link href="/login" style={styles.link}>Login Page</Link>
      <Link href="dashboard/about" style={styles.link}>About Page</Link>
    </ThemedView>
  )
}

export default index

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});