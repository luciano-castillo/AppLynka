import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const CambioContrasena = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cambiar Contraseña</Text>
      <Text style={styles.subtitle}>Actualiza tu contraseña actual</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Contraseña actual"
          style={styles.oldPass}
          placeholderTextColor="#666666"
          secureTextEntry
        />
        <TextInput
          placeholder="Nueva contraseña"
          style={styles.newPass}
          placeholderTextColor="#666666"
          secureTextEntry
        />
        <TextInput
          placeholder="Confirmar nueva contraseña"
          style={styles.newPass}
          placeholderTextColor="#666666"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
    backgroundColor: '#F3EAFD',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: moderateVerticalScale(8),
  },
  subtitle: {
    fontSize: moderateScale(15),
    color: '#666',
    textAlign: 'center',
    marginBottom: moderateVerticalScale(24),
  },
  form: {
    gap: moderateVerticalScale(16),
    marginBottom: moderateVerticalScale(32),
  },
  oldPass: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    fontSize: moderateScale(14),
    color: '#000',
    backgroundColor: '#FCE4EC',
  },
  newPass: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    fontSize: moderateScale(14),
    color: '#000',
    backgroundColor: '#E0F7FA',
  },
  button: {
    backgroundColor: '#9CCCE1',
    paddingVertical: moderateVerticalScale(14),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});

export default CambioContrasena;