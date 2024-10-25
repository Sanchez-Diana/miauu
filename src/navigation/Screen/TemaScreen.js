import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadTemas, addTema, setSelectedTema } from '../slices/temasSlice';

const TemaScreen = () => {
    const dispatch = useDispatch();
    const temas = useSelector((state) => state.temas.temasList); // Asegúrate de usar el nombre correcto

    useEffect(() => {
        // Simula la carga de temas, reemplaza con tu lógica de carga real si es necesario
        const initialTemas = ['maxwell.gif', 'pana-miguel-miguel.gif', 'vibing-cat-popcat.gif'];
        dispatch(loadTemas(initialTemas)); // Carga los temas iniciales
    }, [dispatch]);

    const michiElegido = (tema) => {
        dispatch(setSelectedTema(tema)); // Actualiza el tema seleccionado
        dispatch(addTema(tema)); // Agrega el nuevo tema a la lista
    };

    return (
        <View style={styles.container}>
            <View style={styles.caja}>
                <Text style={styles.titulo}>Elige a tu gato favorito!</Text>

                <Text style={styles.nombres}>Maxwell</Text>
                <TouchableOpacity onPress={() => michiElegido('maxwell.gif')}>
                    <Image
                        source={require('./img/max-spin.gif')}
                        style={{ marginTop: 15, width: 130, height: 130 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text style={styles.nombres}>Pana Miguel</Text>
                <TouchableOpacity onPress={() => michiElegido('miguel.png')}>
                    <Image
                        source={require('./img/pana-miguel-miguel.gif')}
                        style={{ marginTop: 15, width: 130, height: 130 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text style={styles.nombres}>Pop Cat</Text>
                <TouchableOpacity onPress={() => michiElegido('pop-cat.gif')}>
                    <Image
                        source={require('./img/vibing-cat-popcat.gif')}
                        style={{ marginTop: 15, width: 130, height: 130 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
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
        fontSize: 30,
    },
    nombres: {
        marginTop: 15,
        fontSize: 30,
    },
    caja: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '93%',
        width: '90%',
    },
});
