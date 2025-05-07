import { View, Text, StyleSheet,Image, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constants/imagePath'
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Auth = () => {
  const [isLoading,setloading] = useState(false)

  useEffect(() => {
      setTimeout(() => {
        setloading(true);
      },3000)

  },[])

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
      <Image source={imagePath.logo} style={styles.logoStyle} resizeMode="contain"/>
      <Text style={styles.lynkaText}>Lynka</Text>
      </View>
      <View style={styles.body}>
        
        
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
          <ActivityIndicator  size={moderateScale(50)} color={"#9CCCE1"}/>
          <Text style={styles.from}>Loading...</Text>          
          </>
        ) :
         <>
          <Text style={styles.from}>From</Text>
          <Text style={styles.object}>Gloria a Object</Text>
         </>}
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:"center",
      backgroundColor:"white",
      justifyContent:"space-between",
      paddingVertical: moderateScale(90),
    },
    header:{
      alignItems:"center"
    },
    body:{},  
    footer:{
      alignItems:"center"
    },
    logoStyle:{
      height: moderateScale(230),
      width: moderateScale(230),
    },
    lynkaText:{
      fontSize: moderateScale(32),
      fontWeight:"semibold",    
    },  
    from:{
      fontSize: moderateScale(15),
      color: "#686868"
    },
    object:{
      fontSize:moderateVerticalScale(15),
      color:"#686868"
    },
});

export default Auth