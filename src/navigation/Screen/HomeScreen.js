import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    return (
            <View style={styles.container}>
              <View style={styles.iconContainer}>
                <Icon name="chatbox-outline" size={30} color="#1C1F33" />
                <Icon name="heart-circle-outline" size={30} color="#1C1F33" />
              </View>
              <View style={styles.coo}> 
                <Text style={styles.Tex}></Text>
              </View>
            </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCBBFF',
        padding: 9, 
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconContainer: {
        flexDirection: 'column', 
        alignItems: 'flex-end', 
        width:400
      },
      coo: {
        flex: 0.90,
        backgroundColor: "#D9D9D9",
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        //marginTop: 40,
        //marginLeft: 40,
      },
      Tex: {
        fontSize: 20, // Tamaño del texto
        fontWeight: 'bold', // Texto en negrita
        color: 'blue', // Color del texto
        textAlign: 'center', // Alineación del texto
      }
    });
//para poner iconos
//import Icon from 'react-native-vector-icons/Ionicons';

//<Icon name="home-outline" size={30} color="#000" />
