import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/navigation/store.js'; // Asegúrate de que la ruta sea correcta
import { BottomTab } from './src/navigation/BottomTab.js';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTab />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
