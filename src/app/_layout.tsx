import { StyleSheet, useColorScheme} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../../context/UserContext'
import { ProductProvider } from '../../context/ProductContext'

const RootLayout = () => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]

    return (
        <UserProvider>
            <ProductProvider>
                <StatusBar style="auto" />
                <Stack initialRouteName='index' screenOptions={{
                    animation: 'slide_from_left',
                    animationDuration: 20,
                    headerStyle: {
                        backgroundColor: theme.navBackground, 
                    },
                    headerTintColor: theme.title,
                    headerTitleAlign: 'center',
                }}>
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(dashboard)" options={{ headerShown: false }}/>
                    <Stack.Screen name="index" options={{
                        title: 'Home', 
                        headerShown: false
                        }}/>
                </Stack>
            </ProductProvider>
        </UserProvider>
    ) 
}

export default RootLayout

const styles = StyleSheet.create({})