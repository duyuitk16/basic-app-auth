import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const List = ({navigation}: RouterProps) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      rowGap: 8
    }}>
      <Button onPress={() => navigation.navigate('detail')} title='Open detail'></Button>      
      <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'></Button>      
    </View>
  )
}

export default List