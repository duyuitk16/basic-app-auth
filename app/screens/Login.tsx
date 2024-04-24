import { View, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log('🚀 ~ signIn ~ response:', response)
    } catch (error: any) {
      console.log('🚀 ~ signIn ~ error:', error)
      alert('Sign in failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log('🚀 ~ signIn ~ response:', response)
      alert('Check your email!')
    } catch (error: any) {
      console.log('🚀 ~ signIn ~ error:', error)
      alert('Sign up failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput style={styles.input} placeholder='Email' defaultValue='' value={email} onChangeText={(txt) => setEmail(txt)} autoCapitalize='none'  />
        <TextInput style={styles.input} placeholder='Password' defaultValue='' value={password} onChangeText={(txt) => setPassword(txt)} secureTextEntry autoCapitalize='none'  />
        {loading ? <ActivityIndicator size='large' color='#0000ff' /> :
        <View style={styles.wrapper_button}>
          <Button title='Login' onPress={signIn} />
          <Button title='Sign up' onPress={signUp} />
        </View>
        }
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },
  wrapper_button: {
    marginTop: 4,
    rowGap: 8,
  }
})