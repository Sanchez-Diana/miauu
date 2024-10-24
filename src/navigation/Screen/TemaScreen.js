import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const TemasScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.caja}>
          <Text style={styles.titulo}>Elige a tu gato favorito!</Text>

          <Text style={styles.nombres}>Maxwell</Text>

          <Image
            id='max'
            onPress={michiElegido}
            source={require('./img/max-spin.gif')}
            style={{ marginTop:15,  width: 130, height: 130 }} // Ajusta el tamaño según necesites
            resizeMode="contain" // O cualquier otro modo que prefieras
          />

          <Text style={styles.nombres}
            id='miguel'
            onPress={michiElegido}>Pana Miguel</Text>
          <Image
            source={require('./img/pana-miguel-miguel.gif')}
            style={{ marginTop:15,  width: 130, height: 130 }} // Ajusta el tamaño según necesites
            resizeMode="contain" // O cualquier otro modo que prefieras
          />

          <Text style={styles.nombres}>Pop Cat</Text>

          <Image
            id='pop'
            onPress={michiElegido}
            source={require('./img/vibing-cat-popcat.gif')}
            style={{ marginTop:15, width: 130, height: 130 }} // Ajusta el tamaño según necesites
            resizeMode="contain" // O cualquier otro modo que prefieras
          />
      </View>
      </View>
    );
};

export default TemasScreen; 

const michiElegido = () =>{
  console.log()
}

const styles = StyleSheet.create({

    container: {
    
    flex: 1,
    backgroundColor: '#FFCFE6',
    alignItems: 'center',
    justifyContent: 'center',
    },
    titulo: {
      fontSize: 30
    },
    nombres: {
      marginTop:15,
      fontSize: 30
    },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
  caja:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: '93%',
    width: '90%'
  }
});