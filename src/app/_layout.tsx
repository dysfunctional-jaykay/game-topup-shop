import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]

    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{
                animation: 'slide_from_left',
                animationDuration: 20,
                headerStyle: {
                    backgroundColor: theme.navBackground, 
                },
                headerTintColor: theme.title,
                headerTitleAlign: 'center',
            }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{
                    title: 'Home', 
                    }}/>
            </Stack>
        </>
    ) 
}

export default RootLayout

const styles = StyleSheet.create({})