import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard, useColorScheme } from 'react-native'
import React, {useState} from 'react'
import { Link } from 'expo-router'
import { useUser } from '../../../hooks/useUser'
import { Colors } from '../../../constants/Colors'

// Import components
import ThemedView from '../../../components/ThemedView'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedTextInput from '../../../components/ThemedTextInput'

const Register = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState<string | null>(null)

  const { register } = useUser()

  const handleSubmit = async () => {
    setError(null)

    try {
      await register(username, email, password)
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
          Register an account
        </ThemedText>
        <ThemedTextInput 
          style={{width: '80%', marginBottom: 10}} 
          placeholder='Username' 
          placeholderTextColor={theme.text}
          keyboardType='email-address'
          onChangeText={setUsername}
          value={username}
        />

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
            Register  
          </Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={20} />
        <Link href={'/login'}>
          <ThemedText style={{textAlign: 'center'}}>
            Already have an account? Login now
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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