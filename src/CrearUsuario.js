import { Text, StyleSheet, StatusBar, View,Pressable, TextInput, Alert } from 'react-native';
import * as React from 'react';
import Btn from '../componentes/Btn';
import ScrollV from '../componentes/Scroll';
import HorizontalScrollView from '../componentes/ScrollVIew';

export default function CrearUsuario({ navigation }) {
  // Mover useState dentro del componente
  const [usuario, setUsuario] = React.useState('');
  const [contraseña, setContraseña] = React.useState('');

  const handleSubmit = async () => {
    if (!usuario || !contraseña) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    const formData = {
      usuario,
      contraseña
    };

    try {
      console.log(formData);
      const response = await fetch('http://10.0.6.165:3000/miau/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Alert.alert('Éxito', 'Formulario enviado correctamente.');
        setUsuario('');
        setContraseña('');
      } else {
        Alert.alert('Error', 'Hubo un problema al enviar los datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Alert.alert('Error', 'No se pudo conectar con el servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.caja}>
        <Text style={styles.titulo}>Crear Usuario</Text>
        <TextInput
          placeholder="usuario"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.inputs}
        />
        <TextInput
          placeholder="contraseña"
          value={contraseña}
          onChangeText={setContraseña}
          style={styles.inputs}
          secureTextEntry
        />
        <Pressable title="Enviar" onPress={handleSubmit}><Text>Enviar</Text></Pressable>

        <Btn texto="Atras" presionado={() => navigation.navigate("Log")}></Btn>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCBBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caja: {
    height: '60%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 40,
      height: 50,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    height: 50,
    paddingStart: 15,
  },
});
