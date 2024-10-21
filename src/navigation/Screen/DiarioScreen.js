import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiarioScreen = () => {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    
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

    const addNote = () => {
        if (note.trim()) {
            const updatedNotes = [...notes, note];
            setNotes(updatedNotes);
            setNote('');
        }
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
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
            <Button title="Agregar Nota" onPress={addNote} />
            </View>
            <View>
            <FlatList
                data={notes}
                renderItem={({ item, index }) => (
                    <View style={styles.note}>
                        <Text>{item}</Text>
                        <TouchableOpacity onPress={() => deleteNote(index)}>
                            <Text style={styles.delete}>Eliminar</Text> 
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            </View>
        </View>
    );
};

export default DiarioScreen;

//arreglar boton de

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
        height: '90',
    },
    note: {
        padding: 50,
        borderBottomWidth: 1,
        width: '100%',
        height: '100%',
    },
    delete: {
        position: 'absolute',
        right: 10,
        color: 'red',
    },
});
