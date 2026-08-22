import { View, useColorScheme, ViewProps, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ThemedTopBar = ({ style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  return (
    <View style={[styles.topBar, 
      style,
    ]}
    {...props} />
  )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 12,
        marginBottom: 10,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
})

export default ThemedTopBar