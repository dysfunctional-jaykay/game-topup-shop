import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { useUser } from '../../../hooks/useUser'
import { Colors } from '../../../constants/Colors'

// Import components
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedTextInput from '../../../components/ThemedTextInput'

const Login = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState<string | null>(null)

  const { login } = useUser()

  const handleSubmit = async () => {
    setError(null)

    try {
      await login(email, password)
    } catch (error){
      if(error instanceof Error){
        setError(error.message)
      } else {
        setError('An unexpected error occured')
      }
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
          Login to your Account
        </ThemedText>
        <ThemedTextInput 
          style={{width: '80%', marginBottom: 10}} 
          placeholder='Email'
          placeholderTextColor={theme.text}
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput 
          style={{width: '80%', marginBottom: 10}} 
          placeholder='Password' 
          placeholderTextColor={theme.text}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{color: '#f2f2f2'}}>
            Login  
          </Text>
        </ThemedButton>
        <Spacer />

        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href={'/register'}>
          <ThemedText style={{textAlign: 'center'}}>
            Register
          </ThemedText>
        </Link>
        <Link href={'/'}>
          Back
        </Link> 
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
})