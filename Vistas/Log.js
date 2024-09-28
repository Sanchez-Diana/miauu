import { Text, StyleSheet, StatusBar, View } from "react-native"

import Btn from "../componentes/Btn"
import ScrollV from "../componentes/Scroll"
import HorizontalScrollView from "../componentes/ScrollVIew"


export default function Log({ navigation }) {
    return (
      <View style={styles.container}>
  
        <View style={styles.caja}>
  
          <Text>Iniciar Sesión</Text>
          <Btn texto="Enviar" presionado={() => navigation.navigate("InicioSesion")}></Btn>
          <Text>Crear Usuario</Text>
          <Btn texto="Crear" presionado={() => navigation.navigate("CrearUsuario")}></Btn>
          <Text>Continuar como invitado</Text>
          <Btn texto="Entrar" presionado={() => navigation.navigate("Home")}></Btn>
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
      flex: 0.53,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      border: 'black'
    }
  });
  