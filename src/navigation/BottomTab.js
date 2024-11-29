import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from './Screen/HomeScreen.js';
import DiarioScreen from './Screen/DiarioScreen.js';
import CalendarioScreen from './Screen/CalendarioScreen.js';
import TemasScreen from "./Screen/TemaScreen.js";
import PerfilScreen from "./Screen/PerfilScreen.js";

import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'Home':
                        iconName = focused ? 'home' : 'home-outline';
                        break;
                    case 'Diario':
                        iconName = focused ? 'book' :'book-outline';
                        break;
                    case 'Calendario':
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        break;
                    case 'Temas':
                        iconName = focused ? 'color-palette' : 'color-palette-outline';
                        break;
                        case 'Creditos':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                         default: 
                        iconName = 'help-outline'; 
                }

                return <Icon name={iconName} size={28} color={focused ? '#1C1F33' : '#404461'} />;
            },
            tabBarLabel: ({ focused }) => {
                return (
                    <Text style={{ color: focused ? '#1C1F33' : '#404461' }}> 
                        {route.name}
                    </Text>
                );
            },
            tabBarStyle: { 
                backgroundColor: '#A77BCA',
                height: 60, 
                paddingBottom: 3, 
                borderTopColor: 'transparent',
            },
            
        })}
    >
            <Tab.Screen name='Temas' component={TemasScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Diario' component={DiarioScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Calendario' component={CalendarioScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Creditos' component={PerfilScreen} options={{ headerShown: false }}/>

        </Tab.Navigator>
    );
}

