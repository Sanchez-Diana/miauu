import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackgroundImage } from '../slices/backgroundSlice';

const gifMap = {
    'maxwell.gif': require('./img/maxwell.gif'),
    'miguel.png': require('./img/miguel.png'),
    'pop-cat.gif': require('./img/pop-cat.gif'),
};

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [heartModalVisible, setHeartModalVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const selectedTema = useSelector((state) => state.temas.selectedTema); 

    const toggleChatModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleHeartModal = () => {
        setHeartModalVisible(!heartModalVisible);
    };

    useEffect(() => {
        
        const hasNotes = false; 

        if (!hasNotes) {
            const notification = {
                message: "No has escrito todavía en tu diario.",
                date: new Date().toLocaleString(),
            };
            setNotifications([...notifications, notification]);
            setModalVisible(true);
        }
    }, []); 

    const closeNotification = () => {
        setModalVisible(false);
    };

    const clearNotification = () => {
        setNotifications([]); 
        setModalVisible(false); 
    };
    const backgroundImage = useSelector(selectBackgroundImage);
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                width: 400,
            }}>
                <TouchableOpacity onPress={toggleChatModal}>
                    <Icon name="chatbox-outline" size={30} color="#1C1F33" />
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent
                >
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                        <View style={{
                            width: 300,
                            padding: 20,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <Text>{notifications.length > 0 ? notifications[0].message : ''}</Text>
                            <Text>{notifications.length > 0 ? notifications[0].date : ''}</Text>
                            <TouchableOpacity onPress={closeNotification}>
                                <Text style={{ marginTop: 20, color: '#FF0000' }}>Cerrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={clearNotification}>
                                <Text style={{ marginTop: 10, color: '#FF0000' }}>Eliminar Notificación</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={toggleHeartModal}>
                    <Icon name="heart-circle-outline" size={30} color="#1C1F33" />
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    visible={heartModalVisible}
                    transparent
                >
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                        <View style={{
                            width: 300,
                            padding: 20,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <Text>Puchaaaaaaaaaa</Text>
                            <TouchableOpacity onPress={toggleHeartModal}>
                                <Text style={{ marginTop: 20, color: '#1C1F33' }}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
    
                <View style={styles.coo}>
                    <Text style={styles.Tex}></Text>
                    <Image
                        source={gifMap[selectedTema]} 
                        style={{ marginTop: 15, width: 200, height: 200 }}
                        resizeMode="contain"
                    />
                </View>
    </ImageBackground>
        
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
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
    },
    Tex: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
    },
});
