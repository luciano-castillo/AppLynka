import { Stack } from 'expo-router'
import React from 'react'

const PasswordLayout = () => {
  return (
    <Stack>
    <Stack.Screen name='index' options={{headerShown:false}}/>
   </Stack>
  )
}

export default PasswordLayout