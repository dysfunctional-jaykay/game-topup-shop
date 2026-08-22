import { View, Text, StyleSheet, useColorScheme, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import { Colors } from '../constants/Colors'

type IconName = React.ComponentProps<typeof MaterialDesignIcons>['name']

type ThemedBadgeProps = {
    value: string | number,
    icon?: IconName,
    style?: StyleProp<ViewStyle>,
}

const ThemedBadge = ({ 
    value, 
    icon = 'cash',
    style 
}: ThemedBadgeProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]

    return (
        <View style={[
            styles.badge, 
            { backgroundColor: theme.uiBackground}, 
            style
        ]}>
            <MaterialDesignIcons 
                name={icon}
                size={16} 
                color={theme.iconColor ?? theme.text} 
            />
            <Text style={[styles.value, { color: theme.text }]}>
                {value}
            </Text>
        </View>
    )
}

export default ThemedBadge

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        gap: 5,
    },
    value: {
        fontSize: 14,
        fontWeight: '700',
    },
})