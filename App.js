import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/navigation/store.js'; 
import { BottomTab } from './src/navigation/BottomTab.js';
import HorizontalScrollView from './componentes/ScrollVIew';
import ScrollV from './componentes/Scroll';

import Log from './src/Log.js';
import InicioSesion from './src/InicioSesion.js';
import CrearUsuario from './src/CrearUsuario';
import HomeScreen from './src/navigation/Screen/HomeScreen.js';
import Btn from './componentes/Btn';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
    return (
        <><Provider store={store}><NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Log" component={Log} options={{ headerShown: false }} />
                <Stack.Screen name="InicioSesion" component={InicioSesion} options={{ headerShown: false }} />
                <Stack.Screen name="CrearUsuario" component={CrearUsuario} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
                    {/* <BottomTab /> */}
                </NavigationContainer>
            </Provider></>
    );
};

export default App;
