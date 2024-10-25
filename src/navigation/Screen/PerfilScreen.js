import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


const PerfilScreen= () => {
    return (
  <View style={styles.container}>

<View style={styles.cajaaa}>
<Text style={styles.titulo}>7°1° Programación Tecnica 7 </Text>
<Text style={styles.titulo}>José hernandez Grupo A</Text>
        </View>

    <View style={{ flexDirection: 'row',
               alignItems: 'center', 
               marginTop: 15,
               borderBottomWidth: 1,
               borderBottomColor: 'gray',
               paddingBottom: 10,
            }}>

        
              
            <Image
          source={require('./img/dan.jpeg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
          }}
          resizeMode="contain"
        />
       <View style={{ 
             flexDirection: 'column', 
          }}>
       <Text style={{ 
          marginLeft: 15, 
          marginBottom: 5,
          fontSize: 20,
          }}>
            Danila Gavilan
        </Text>
        <Text style={{ 
          marginLeft: 15 
          }}>
            IG: @danilabonnie_oficial
        </Text>
        <Text style={{ 
          marginLeft: 15 
          }}>
            YT:danilabonnie
        </Text>
       </View>

            </View>
            <View style={{ flexDirection: 'row',
               alignItems: 'center', 
               marginTop: 15,
               
               paddingBottom: 10,
            }}>

        
              
            <Image
          source={require('./img/dii.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
          }}
          resizeMode="contain"
        />
       <View style={{ 
             flexDirection: 'column', 
          }}>
       <Text style={{ 
          marginLeft: 15, 
          marginBottom: 5,
          fontSize: 20,
          }}>
            Diana Sanchez
        </Text>
       </View>

            </View>
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
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#3E2B6D',
      alignItems: 'center',
      justifyContent: 'center',
  },
  cajaaa:{
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5%',
      width: '100%',
      marginTop: '5%',
  },

});


