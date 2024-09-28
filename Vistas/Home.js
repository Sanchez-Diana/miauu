import { Text, StyleSheet, StatusBar, View } from "react-native"

import Btn from "../componentes/Btn"
import ScrollV from "../componentes/Scroll"
import HorizontalScrollView from "../componentes/ScrollVIew"


export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
  
        <View style={styles.caja}>
  
          <Text>El suicidio es una opcion :33</Text>
          <StatusBar style="auto" />
        
        </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCBBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    caja: {
      flex: 0.53,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      border: 'black'
    }
  });
  