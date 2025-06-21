import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const CrearCuenta = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <Text style={styles.subtitle}>Por favor, ingresa tus datos</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          placeholderTextColor="#aaaaaa"
        />
        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          placeholderTextColor="#aaaaaa"
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
    fontSize: moderateScale(32),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: moderateVerticalScale(8),
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: '#666',
    textAlign: 'center',
    marginBottom: moderateVerticalScale(24),
  },
  form: {
    gap: moderateVerticalScale(16),
    marginBottom: moderateVerticalScale(32),
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    fontSize: moderateScale(14),
    color: '#000',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#9CCCE1',
    paddingVertical: moderateVerticalScale(14),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#000',
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});

export default CrearCuenta;