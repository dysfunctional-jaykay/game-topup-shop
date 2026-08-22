import { Tabs } from 'expo-router'
import { useColorScheme} from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import UserOnly from '../../../components/auth/UserOnly'

const DashboardLayout = () => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]

    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarStyle: {backgroundColor: theme.navBackground, paddingTop: 12, height: 90},
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen name="topup" options={{title: "Top Up", tabBarIcon: ({focused}) => (
                <MaterialDesignIcons 
                    size={24} 
                    name={focused ? 'gamepad-square' : 'gamepad-square-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor} />
            )}}/>
            <Tabs.Screen name="credit_shop" options={{title: "Credit Shop", tabBarIcon: ({focused}) => (
                <MaterialDesignIcons 
                    size={24} 
                    name={focused ? 'account-cash' : 'account-cash-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
            )}}/>
            <Tabs.Screen name="receipts" options={{title: "Receipts", tabBarIcon: ({focused}) => (
                <MaterialDesignIcons 
                    size={24}
                    name={focused ? 'receipt' : 'receipt-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            )}}/>
            <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({focused}) => (
                <MaterialDesignIcons 
                    size={24}
                    name={focused ? 'account' : 'account-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            )}}/>
            <Tabs.Screen name="products/[id]" options={{href: null}}/>
            <Tabs.Screen name="purchase/[id]" options={{href: null}}/>
            <Tabs.Screen name="view_products/[id]" options={{href: null, headerShown: true}}/>
        </Tabs>
    ) 
}

export default DashboardLayout