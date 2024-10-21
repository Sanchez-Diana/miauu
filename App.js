import { BottomTab } from './src/navigation/BottomTab.js';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    );
};

export default App;
