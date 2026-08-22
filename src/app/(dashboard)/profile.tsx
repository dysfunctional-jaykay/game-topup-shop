import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useUser } from '../../../hooks/useUser'

// Import components
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'

const profile = () => {
    const { logout, user } = useUser()

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedText style={styles.title}>
                Profile
            </ThemedText>
            <ThemedText>
                {user?.email}
            </ThemedText>
            <Spacer />

            <ThemedText>
                Yoohoo
            </ThemedText>
            <Spacer />

            <ThemedButton onPress={logout}>
                <Text style={{color: '#f2f2f2'}}>Logout</Text>
            </ThemedButton>
        </ThemedView>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
})