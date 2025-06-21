import { Stack } from 'expo-router'
import React from 'react'

const registerLayout = () => {
  return (
    <Stack>
    <Stack.Screen name='index' options={{headerShown:false}}/>
   </Stack>
  )
}

export default registerLayout