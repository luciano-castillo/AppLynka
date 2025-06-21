import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

const Main = () => {
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }}>
      <Text onPress={ () => console.log("Texto presionado")}>Ingresamos a la Aplicacion</Text>
      <Button title="test" onPress={() => console.log("Boton presionado")}/>
    </SafeAreaView>
  )
}

export default Main