import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [heartModalVisible, setHeartModalVisible] = useState(false);

  const toggleChatModal = () => {
    setModalVisible(!ModalVisible);
  };

  const toggleHeartModal = () => {
    setHeartModalVisible(!heartModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={ {
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: 400,
        }}>
        <TouchableOpacity onPress={toggleChatModal}>
          <Icon name="chatbox-outline" size={30} color="#1C1F33" />
        </TouchableOpacity>

        <Modal
          animationType=""
          visible={ModalVisible}
          transparent
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
            <View style={ {
              width: 300,
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}>
              <Text>Carlosssss</Text>
              <TouchableOpacity onPress={toggleChatModal}>
                <Text style={{
                  marginTop: 20,
                  color: '#1C1F33',
                }}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={toggleHeartModal}>
          <Icon name="heart-circle-outline" size={30} color="#1C1F33" />
        </TouchableOpacity>

        <Modal
          animationType="fade"
          visible={heartModalVisible}
          transparent
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
            <View style={ {
              width: 300,
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}>
              <Text>Puchaaaaaaaaaa</Text>
              <TouchableOpacity onPress={toggleHeartModal}>
                <Text style={{
                  marginTop: 20,
                  color: '#1C1F33',
                }}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.coo}>
        <Text style={styles.Tex}></Text>
        <Image
          source={require('./img/maxwell.gif')}
          style={{ marginTop: 15, width: 200, height: 200 }}
          resizeMode="contain"
        />
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
  coo: {
    flex: 0.90,
    backgroundColor: "#D9D9D9",
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  Tex: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
});
