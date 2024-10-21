import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const PerfilScreen= () => {
    return (
        <View style={styles.container}>
            <Text>Perfil del usuario</Text>
        </View>
    );
};

export default PerfilScreen; 

const styles = StyleSheet.create({

    container: {
    
    flex: 1,
    backgroundColor: '#CCBBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

});


//style={styles.text}

// const styles = StyleSheet.create({

//     container: 
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     text: {
//         fontSize: 20,
//         color: 'blue', 
//       }
//   });