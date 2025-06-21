import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'

const MainLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='index' options={{headerShown:false}}/>
   </Stack>
  )
}

export default MainLayout