import { Text, StyleSheet, StatusBar, View } from "react-native"

import Btn from "../componentes/Btn"
import ScrollV from "../componentes/Scroll"
import HorizontalScrollView from "../componentes/ScrollVIew"
import { BottomTab } from "./navigation/BottomTab"


export default function Log({ navigation }) {
    return (
      <View style={styles.container}>
  
        <View style={styles.caja}>
  
          <Text style={styles.texto}>Iniciar Sesión</Text>
          <Btn texto="Iniciar" presionado={() => navigation.navigate("InicioSesion")}></Btn>
          <Text style={styles.texto}>Crear Usuario</Text>
          <Btn texto="Crear" presionado={() => navigation.navigate("CrearUsuario")}></Btn>
          <Text style={styles.texto}>Continuar como invitado</Text>
          <Btn texto="Entrar" presionado={() => navigation.navigate("BottomTab")}></Btn>
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
      backgroundColor: '#FFFFFF',//fondo
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,//ancho
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
    texto:{
      fontSize: 17,
      marginTop: 20
    }
  });
  