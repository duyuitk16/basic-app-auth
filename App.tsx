import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Detail from './app/screens/Detail';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator()

const InsideStack = createNativeStackNavigator()

const InsideLayout = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='todos' component={List}  />
      <InsideStack.Screen name='detail' component={Detail} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>()
  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('🚀 ~ onAuthStateChanged ~ user:', user)
      setUser(user)
    })
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        { user
        ? 
        <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}} />
        :
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
