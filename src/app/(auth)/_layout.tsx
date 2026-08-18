import { useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            />
        </>
    ) 
}

export default AuthLayout