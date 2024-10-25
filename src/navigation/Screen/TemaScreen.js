import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadTemas, addTema, setSelectedTema } from '../slices/temasSlice';
import { setBackgroundImage } from '../slices/backgroundSlice';

const TemaScreen = () => {
    const dispatch = useDispatch();
    const temas = useSelector((state) => state.temas.temasList);

    useEffect(() => {
        const initialTemas = ['maxwell.gif', 'pana-miguel-miguel.gif', 'vibing-cat-popcat.gif'];
        dispatch(loadTemas(initialTemas));
    }, [dispatch]);

    const michiElegido = (tema) => {
        dispatch(setSelectedTema(tema));
        dispatch(addTema(tema));
    };

    const changeBackground = (image) => {
        dispatch(setBackgroundImage(image));
    };

    return (
    <View style={styles.container}>
        <View style={styles.caja}>
        <View style={styles.cajatitulo}>
            <Text style={styles.titulo}>Elige a tu gato favorito!</Text>

            </View>
            <View style={styles.cajag}>
                

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.nombres}>Maxwell</Text>
                        <TouchableOpacity onPress={() => michiElegido('maxwell.gif')}>
                            <Image
                                source={require('./img/max-spin.gif')}
                                style={styles.imagen}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.nombres}>Pana Miguel</Text>
                        <TouchableOpacity onPress={() => michiElegido('miguel.png')}>
                            <Image
                                source={require('./img/pana-miguel-miguel.gif')}
                                style={styles.imagen}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.nombres}>Pop Cat</Text>
                        <TouchableOpacity onPress={() => michiElegido('pop-cat.gif')}>
                            <Image
                                source={require('./img/vibing-cat-popcat.gif')}
                                style={styles.imagen}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.cajaf}>

                    <View style={styles.cajatitulof}>
                    <Text style={styles.titulof}>Selecciona un fondo!</Text>
                    </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo1.png'))}>
                        <Image source={require('./img/fondo1.png')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo2.png'))}>
                        <Image source={require('./img/fondo2.png')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo3.jpg'))}>
                        <Image source={require('./img/fondo3.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo4.png'))}>
                        <Image source={require('./img/fondo4.png')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo5.jpg'))}>
                        <Image source={require('./img/fondo5.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo6.jpg'))}>
                        <Image source={require('./img/fondo6.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo7.jpg'))}>
                        <Image source={require('./img/fondo7.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo8.jpg'))}>
                        <Image source={require('./img/fondo8.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo9.jpg'))}>
                        <Image source={require('./img/fondo9.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo10.jpg'))}>
                        <Image source={require('./img/fondo10.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo11.jpg'))}>
                        <Image source={require('./img/fondo11.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo12.jpg'))}>
                        <Image source={require('./img/fondo12.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo13.jpg'))}>
                        <Image source={require('./img/fondo13.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBackground(require('./img/fondo14.jpg'))}>
                        <Image source={require('./img/fondo14.jpg')} style={{ width: 100, height: 100, margin: 10 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>    
            </View>
        </View>
            
    </View>
    );
};

export default TemaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCFE6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3E2B6D',
    },
    cajatitulo:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
        width: '100%',
        marginTop: '5%',
    },
    titulof: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3E2B6D',
    },
    cajatitulof:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
        width: '100%',
    },
    nombres: {
        marginTop: 15,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
        color: '#3E2B6D',
    },
    caja: {
        backgroundColor: 'white',
        justifyContent: "space-evenly",
        height: '90%',
        width: '90%', 
       
    },
    scrollView: {
        flexDirection: 'row', 
    },
    itemContainer: {
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 10,
    },
    imagen: {
        width: '100%',
        height: '50%',
    },
    cajag: {
        justifyContent: "space-around",
        alignItems: "center",
        height: '40%',
        width: '100%',
    },
    cajaf: {
        justifyContent: "space-around",
        alignItems: "center",
        height: '40%',
        width: '100%',
    },
});
