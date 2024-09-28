import { StyleSheet, Text, View } from 'react-native';
import HorizontalScrollView from './componentes/ScrollVIew';
import ScrollV from './componentes/Scroll';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Log from './Vistas/Log';
import InicioSesion from './Vistas/InicioSesion';
import CrearUsuario from './Vistas/CrearUsuario';
import Home from './Vistas/Home';
import Btn from './componentes/Btn';

const Stack = createStackNavigator();

export default function App() {
  return (
   <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Log" component={Log}/>
          <Stack.Screen name ="InicioSesion" component={InicioSesion}/>
          <Stack.Screen name ="CrearUsuario" component={CrearUsuario}/>
          <Stack.Screen name = "Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" /> 
      </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});