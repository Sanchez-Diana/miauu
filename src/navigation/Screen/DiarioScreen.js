import React, { useEffect, useState  } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const DiarioScreen = () => {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 

    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem('notes');
            if (storedNotes) {
               
                const parsedNotes = JSON.parse(storedNotes);
                const sortedNotes = parsedNotes.reverse();
                setNotes(sortedNotes);
            }
        }  catch (error) {
            console.error('Error al cargar las notas', error);
        }
    };

    const saveNotes = async (newNotes) => {
        try {

            const sortedNotes = newNotes.reverse();
            await AsyncStorage.setItem('notes', JSON.stringify(sortedNotes));
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
                const updatedNotes = [...notes];
                updatedNotes[editIndex] = note;
                setNotes(updatedNotes);
                setEditIndex(null); 
            } else {
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
                <Text style={styles.titulo}>Diario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe una nota..."
                    value={note}
                    onChangeText={setNote}
                />
                <View
                    style={styles.boton}>
                <Button 
                    title={editIndex !== null ? "Guardar" : "Agregar Nota"} 
                    onPress={addOrEditNote} 
                />
                </View>
            </View>
            <View >
                <View style={styles.cajaN}>
                    <FlatList
                        data={notes}
                        renderItem={({ item, index }) => (
                            <View style={styles.note}>
                                <Text style={styles.noteText}>{item}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={() => startEditNote(index)}>
                                        <Text style={styles.edit}>
                                            <Icon name="pencil-outline" size={30} color="#AA64FF" />
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deleteNote(index)}>
                                        <Text style={styles.delete}><Icon name="trash" size={30} color="#FF64EF" /></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    </View>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '100%',
        border: 'black',
        borderRadius: 30,
        shadowColor: '#000',
      shadowOffset: {
        width: 40,
        height: 50,
      },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 4,
      marginTop: '8%',
      overflow: 'scroll'
    },
    cajaN:{
        padding: '3%',
        height: '79%',
        maxHeight: '70%',
        backgroundColor: '#EBE5FF',
        border: 'black',
        borderRadius: 30,
        shadowColor: '#000',
      shadowOffset: {
        width: 40,
        height: 50,
      },
      shadowOpacity: 1,
      shadowRadius: 20,
      elevation: 4,
      marginTop: '8%',
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderColor: 'grey',
        padding: 10,
        width: '80%',
        marginTop: 20,
        borderRadius:30,
        height: 50,
        paddingStart: 15
    },
    note: {
        padding: 20,
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    },
    noteText: {
        flex: 1, 
    },
    delete: {
        color: 'red',
        marginLeft: 10, 
    },
    edit: {
        color: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row', 
    },
    titulo:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3E2B6D',
    },
    boton:{
        backgroundColor: '#A77BCA',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: '3%'
    }
});
