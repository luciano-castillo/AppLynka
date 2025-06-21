import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
    FlatList,
    Modal,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const prioridadOptions = ['Alta', 'Media', 'Baja'];

const CrearTarea = () => {
  const [tarea, setTarea] = useState('');
  const [prioridad, setPrioridad] = useState<string | null>(null);
  const [fecha, setFecha] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPrioridadModal, setShowPrioridadModal] = useState(false);

  const onChangeDate = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFecha(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Crear Tarea</Text>

      <TextInput
        placeholder="Nombre de la tarea"
        style={styles.nombreTarea}
        value={tarea}
        onChangeText={setTarea}
        placeholderTextColor="#A9A9A9"
      />

      <TextInput
        placeholder="Descripcion"
        style={styles.descripcionTarea}
        value={tarea}
        onChangeText={setTarea}
        placeholderTextColor="#A9A9A9"
      />

      {/* FECHA */}
      <TouchableOpacity style={styles.fechaDropdown} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dropdownText}>
           Fecha: {fecha.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      {/* PRIORIDAD */}
      <TouchableOpacity style={styles.priridadDropdown} onPress={() => setShowPrioridadModal(true)}>
        <Text style={styles.dropdownText}>
          {prioridad || 'Prioridad'}
        </Text>
      </TouchableOpacity>

      {/* CONFIRMAR */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      {/* MODAL: Prioridad */}
      <Modal visible={showPrioridadModal} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setShowPrioridadModal(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={prioridadOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setPrioridad(item);
                    setShowPrioridadModal(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* DATETIME PICKER */}
      {showDatePicker && (
        <DateTimePicker
          value={fecha}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
    backgroundColor: '#FDF7FF',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: moderateVerticalScale(24),
  },
  nombreTarea: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    fontSize: moderateScale(14),
    color: '#000',
    marginBottom: moderateVerticalScale(16),
    backgroundColor: '#E0F7FA',
  },
  descripcionTarea: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(12),
    fontSize: moderateScale(14),
    color: '#000',
    marginBottom: moderateVerticalScale(16),
    backgroundColor: '#FCE4EC',
  },
  priridadDropdown: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(16),
    marginBottom: moderateVerticalScale(16),
    backgroundColor: '#E0BBF4',
  },
  fechaDropdown: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: moderateScale(8),
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(16),
    marginBottom: moderateVerticalScale(16),
    backgroundColor: '#FFF9C4',
  },
  dropdownText: {
    fontSize: moderateScale(14),
    color: '#333',
  },
  button: {
    backgroundColor: '#9CCCE1',
    paddingVertical: moderateVerticalScale(14),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginTop: moderateVerticalScale(24),
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

export default CrearTarea;