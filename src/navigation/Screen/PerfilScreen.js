import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


const PerfilScreen= () => {
    return (
  <View style={styles.container}>

    <View style={{ flexDirection: 'row',
               alignItems: 'center', 
               marginTop: 15,
               borderBottomWidth: 1,
               borderBottomColor: 'gray',
               paddingBottom: 10 
            }}>
        <Image
          source={require('./img/gg.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
          }}
          resizeMode="contain"
        />
        <Text style={{ 
          marginLeft: 15 
          }}>
            Perfil del usuario
        </Text>
    </View>
               {/*<View style={styles.caja}>
                
                <Btn texto="Enviar" presionado={() => navigation.navigate("InicioSesion")}></Btn>
              </View>*/}
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