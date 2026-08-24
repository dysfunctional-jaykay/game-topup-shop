import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../../hooks/useUser'
import { useRouter } from "expo-router"
import { Colors } from '../../../constants/Colors'
import { User } from '../../../context/UserContext'

// Import components
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedBadge from '../../../components/ThemedBadge'
import ThemedTopBar from '../../../components/ThemedTopBar'

const Profile = () => {
    const { userInfo, logout, user, authChecked } = useUser()
    const router = useRouter();

    return (
        <ThemedView safe={true} style={{flex: 1}}>
            <ThemedTopBar>
                <ThemedText style={styles.title}>
                    Profile
                </ThemedText>

                <View style={{gap: 10, alignItems: 'center', flexDirection: 'row'}}>
                    <ThemedBadge style={{}} value={userInfo?.credits ?? 0} />

                    {authChecked && user !== null ? (
                        <ThemedButton onPress={logout}>
                            <Text style={{color: '#f2f2f2'}}>Logout</Text>
                        </ThemedButton>
                    ):(
                        <ThemedButton onPress={() => router.push('/login')}>
                            <Text style={{color: '#f2f2f2'}}>Login</Text>
                        </ThemedButton>
                    )}
                </View>
            </ThemedTopBar>
        
            <ThemedView style={styles.container}>
                {authChecked && user !== null ? (
                    <Image source={require('../../../assets/misc/chiikawa.jpg')} style={styles.image} />
                ) : (
                    <ThemedText style={{fontSize: 20}}>
                        No profile currently logged in...
                    </ThemedText>
                )}
                
                
                <View style={{alignItems: 'center', flexDirection: 'column'}}>
                    <ThemedText style={{fontSize: 40, fontWeight: 'bold'}}>
                        {userInfo?.username}
                    </ThemedText>
                    <ThemedText style={{fontSize: 15, color: Colors.primary}}>
                        {user?.email}
                    </ThemedText>
                </View>
            </ThemedView>
        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    image: {
        borderRadius: 100,
        height: 200,
        width: 200,
        marginRight: 10,
    },
})