import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiarioScreen = () => {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Estado para el índice de la nota en edición

    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem('notes');
            if (storedNotes) {
                setNotes(JSON.parse(storedNotes));
            }
        } catch (error) {
            console.error('Error al cargar las notas', error);
        }
    };

    const saveNotes = async (newNotes) => {
        try {
            await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
        } catch (error) {
            console.error('Error al guardar las notas', error);
        }
    };

    useEffect(() => {
        loadNotes();
    }, []);

    useEffect(() => {
        saveNotes(notes);
    }, [notes]);

    const addOrEditNote = () => {
        if (note.trim()) {
            if (editIndex !== null) {
                // Actualiza la nota en el índice especificado
                const updatedNotes = [...notes];
                updatedNotes[editIndex] = note;
                setNotes(updatedNotes);
                setEditIndex(null); // Reiniciamos el índice
            } else {
                // Agrega una nueva nota
                const updatedNotes = [...notes, note];
                setNotes(updatedNotes);
            }
            setNote('');
        }
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    const startEditNote = (index) => {
        setNote(notes[index]);
        setEditIndex(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cajaaa}>
                <Text>Notasss</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe una nota..."
                    value={note}
                    onChangeText={setNote}
                />
                <Button 
                    title={editIndex !== null ? "Guardar" : "Agregar Nota"} 
                    onPress={addOrEditNote} 
                />
            </View>
            <View>
                <FlatList
                    data={notes}
                    renderItem={({ item, index }) => (
                        <View style={styles.note}>
                            <Text style={styles.noteText}>{item}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={() => startEditNote(index)}>
                                    <Text style={styles.edit}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteNote(index)}>
                                    <Text style={styles.delete}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default DiarioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCBBFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    cajaaa: {
        backgroundColor: '#A5A6D0',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '100%',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        margin: 20,
        paddingHorizontal: 10,
        width: '90%',
        height: 40,
    },
    note: {
        padding: 20,
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row', // Para alinear los elementos en fila
        justifyContent: 'space-between', // Espacio entre los elementos
        alignItems: 'center', // Centrar verticalmente
    },
    noteText: {
        flex: 1, // Para que el texto ocupe el espacio disponible
    },
    delete: {
        color: 'red',
        marginLeft: 10, // Espaciado entre botones
    },
    edit: {
        color: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row', // Alinear botones en fila
    },
});
