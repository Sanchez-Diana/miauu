import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from './Screen/HomeScreen.js';
import DiarioScreen from './Screen/DiarioScreen.js';
import CalendarioScreen from './Screen/CalendarioScreen.js';
import ConfiguracionScreen from './Screen/ConfiguracionScreen.js';
import TemasScreen from "./Screen/TemaScreen.js";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Temas' component={TemasScreen} />
            <Tab.Screen name='Diario' component={DiarioScreen} />
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Calendario' component={CalendarioScreen} />
            <Tab.Screen name='Configuración' component={ConfiguracionScreen} />
        </Tab.Navigator>
    );
};
