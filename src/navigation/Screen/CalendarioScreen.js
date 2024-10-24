import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarioScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [event, setEvent] = useState('');
    const [events, setEvents] = useState({});
    const [markedDates, setMarkedDates] = useState({});
    const [editIndex, setEditIndex] = useState(null); 

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const storedEvents = await AsyncStorage.getItem('events');
                if (storedEvents) {
                    setEvents(JSON.parse(storedEvents));
                }
            } catch (error) {
                console.error("Error loading events: ", error);
            }
        };

        loadEvents();
    }, []);

    useEffect(() => {
        const saveEvents = async () => {
            try {
                await AsyncStorage.setItem('events', JSON.stringify(events));
            } catch (error) {
                console.error("Error saving events: ", error);
            }
        };

        saveEvents();
    }, [events]);

    const onDayPress = (day) => {
        const dateString = day.dateString;

        const updatedMarkedDates = {
            ...markedDates,
            [dateString]: {
                ...markedDates[dateString],
                selected: true,
                selectedColor: '#CCBBFF',
            },
        };

        if (selectedDate) {
            updatedMarkedDates[selectedDate] = {
                ...markedDates[selectedDate],
                selected: false,
            };
        }

        setSelectedDate(dateString);
        setMarkedDates(updatedMarkedDates);
        setEvent('');
        setEditIndex(null); 
    };

    const addOrEditEvent = () => {
        if (event && selectedDate) {
            const updatedEvents = { ...events };
            if (editIndex !== null) {
                updatedEvents[selectedDate][editIndex] = event;
                setEditIndex(null); 
            } else {
                updatedEvents[selectedDate] = [...(updatedEvents[selectedDate] || []), event];
            }

            const updatedMarkedDates = {
                ...markedDates,
                [selectedDate]: {
                    ...markedDates[selectedDate],
                    marked: true,
                    dots: [{ key: 'event', color: '#FF6F61' }],
                },
            };

            setEvents(updatedEvents);
            setMarkedDates(updatedMarkedDates);
            setEvent('');
        }
    };

    const removeEvent = (eventToRemove) => {
        if (!selectedDate || !events[selectedDate]) return;

        const filteredEvents = events[selectedDate].filter(evt => evt !== eventToRemove);
        const updatedEvents = {
            ...events,
            [selectedDate]: filteredEvents.length > 0 ? filteredEvents : undefined,
        };

        const updatedMarkedDates = {
            ...markedDates,
        };

        if (filteredEvents.length > 0) {
            updatedMarkedDates[selectedDate] = {
                ...markedDates[selectedDate],
                dots: [{ key: 'event', color: '#FF6F61' }],
            };
        } else {
            delete updatedMarkedDates[selectedDate];
        }

        setEvents(updatedEvents);
        setMarkedDates(updatedMarkedDates);
    };

    const editEvent = (index) => {
        setEvent(events[selectedDate][index]); 
        setEditIndex(index); 
    };

    const filterMarkedDates = () => {
        const filteredMarkedDates = {};
        for (const date in events) {
            if (events[date] && events[date].length > 0) {
                filteredMarkedDates[date] = {
                    marked: true,
                    dots: [{ key: 'event', color: '#FF6F61' }],
                };
            }
        }
        return filteredMarkedDates;
    };

    useEffect(() => {
        setMarkedDates(prevMarkedDates => ({
            ...prevMarkedDates,
            ...filterMarkedDates(),
        }));
    }, [events]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendario</Text>
            <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                theme={{
                    todayTextColor: '#FF5722',
                    dayTextColor: '#333',
                    arrowColor: '#A27BCA',
                    monthTextColor: '#CCBBFF',
                    textDayFontWeight: 'bold',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: 'bold',
                }}
            />
            {selectedDate ? (
                <View style={styles.eventContainer}>
                    <Text style={styles.selectedDate}>Fecha: {selectedDate}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Agregar evento"
                        value={event}
                        onChangeText={setEvent}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addOrEditEvent}>
                        <Text style={styles.addButtonText}>{editIndex !== null ? "Guardar Cambios" : "Agregar Evento"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.eventListTitle}>Eventos:</Text>
                    {events[selectedDate] && events[selectedDate].map((evt, index) => (
                        <View key={index} style={styles.eventItem}>
                            <Text style={styles.event}>{evt}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={() => editEvent(index)} style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeEvent(evt)} style={styles.removeButton}>
                                    <Text style={styles.removeButtonText}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    {(!events[selectedDate] || events[selectedDate].length === 0) && (
                        <Text style={styles.noEventsText}>No hay eventos para esta fecha.</Text>
                    )}
                </View>
            ) : null}
        </View>
    );
};

export default CalendarioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E0F0',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3E2B6D',
        marginBottom: 20,
    },
    selectedDate: {
        marginTop: 20,
        fontSize: 18,
        color: '#3E2B6D',
    },
    eventContainer: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: '#A27BCA',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#A77BCA',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    eventListTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3E2B6D',
    },
    eventItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
        marginVertical: 5,
    },
    event: {
        fontSize: 16,
        color: '#3E2B6D',
    },
    removeButton: {
        backgroundColor: '#A77BCA',
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: 'white',
    },
    editButton: {
        backgroundColor: '#A77BCA',
        padding: 5,
        borderRadius: 5,
        marginRight: 10,
    },
    editButtonText: {
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    noEventsText: {
        marginTop: 10,
        color: 'gray',
    },
});
