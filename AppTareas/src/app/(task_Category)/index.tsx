import React, { useState } from 'react';
import { FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const categories = ['Personal', 'Trabajo', 'Estudio', 'Salud', 'Otro'];

const CategorizarTarea = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Categorizar Tarea</Text>

      <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownText}>
          {selectedCategory || 'Seleccionar categoría'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      {/* Modal Dropdown */}
      <Modal visible={isModalVisible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={styles.modalItem}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
    bottom: 30,
    fontSize: moderateScale(26),
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
  dropdown: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(16),
    marginBottom: moderateVerticalScale(32),
    backgroundColor: '#E0BBF4',
  },
  dropdownText: {
    fontSize: moderateScale(14),
    color: '#333',
  },
  button: {
    top: 30,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    padding: moderateScale(24),
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: moderateScale(8),
    paddingVertical: moderateVerticalScale(12),
  },
  modalItem: {
    paddingVertical: moderateVerticalScale(14),
    paddingHorizontal: moderateScale(16),
  },
  modalItemText: {
    fontSize: moderateScale(15),
  },
});

export default CategorizarTarea;