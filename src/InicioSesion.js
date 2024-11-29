import { Text, StyleSheet, StatusBar, View, TextInput } from "react-native"

import Btn from "../componentes/Btn"
import ScrollV from "../componentes/Scroll"
import HorizontalScrollView from "../componentes/ScrollVIew"


export default function InicioSesion({ navigation }) {
    return (
      <View style={styles.container}>
  
        <View style={styles.caja}>
  
          <Text style={styles.titulo}>Inicia Sesión</Text>
          <TextInput
          placeholder="usuario"
          style={styles.inputs}
        />
        <TextInput
          placeholder="contraseña"
            style={styles.inputs}
          />
          <Btn texto="Iniciar" presionado={() => navigation.navigate("Home")}></Btn>
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
      border: 'black',
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
    titulo:{
      fontSize: 30,
      fontWeight: 'bold'
    },
    inputs:{
      borderWidth: 1,
      borderColor: 'grey',
      padding: 10,
      width: '80%',
      marginTop: 20,
      borderRadius:30,
      height: 50,
      paddingStart: 15
    }
  });
  