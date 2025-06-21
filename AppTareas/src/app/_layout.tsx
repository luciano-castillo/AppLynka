import { Redirect, Stack } from 'expo-router';
import React, { useState } from 'react';

const RootNavigation = () => {

  const [isLogin,setIsLogin] = useState(false);
  //screenOptions={{headerShown:false}} por defecto la etiqueta stack muestra donde estas , se pone esto dentro de Stack para quitarlo visualmente
  return (
    <>
    
    <Stack screenOptions={{headerShown:false}} > </Stack>
    {isLogin? <Redirect href="/(main)"/> : <Redirect href="/(main)"/>}
    </>
    
  )
}

export default RootNavigation