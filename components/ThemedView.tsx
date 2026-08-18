import { View, useColorScheme, ViewProps, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }: ViewProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]

  return (
    <View style={[{backgroundColor: theme.background}, style, styles.container]}
    {...props} />
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20,
    paddingHorizontal: 7,
    gap: 10,
  },
})

export default ThemedView