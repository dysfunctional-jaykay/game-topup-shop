import { View, useColorScheme, ViewProps, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type safeProps = {
  safe? : boolean,
}

const ThemedView = ({ style, safe = false, ...props }: ViewProps & safeProps) => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  if(!safe) return (
    <View style={[style, {backgroundColor: theme.background} ]}
    {...props} />
  )

  const insets = useSafeAreaInsets()

  return (
    <View style={[
      {
        backgroundColor: theme.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom
    }, 
      style,
    ]}
    {...props} />
  )
}

const styles = StyleSheet.create({
})

export default ThemedView