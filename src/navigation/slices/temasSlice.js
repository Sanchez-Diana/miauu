// src/navigation/slices/temasSlice.js
import { createSlice } from '@reduxjs/toolkit';

const temasSlice = createSlice({
    name: 'temas',
    initialState: {
        selectedTema: 'maxwell.gif', // Tema predeterminado
        temasList: [], // Lista de temas si es necesario
    },
    reducers: {
        loadTemas: (state, action) => {
            state.temasList = action.payload; // Carga los temas
        },
        addTema: (state, action) => {
            state.temasList.push(action.payload); // Agrega un nuevo tema
        },
        setSelectedTema: (state, action) => {
            state.selectedTema = action.payload; // Establece el tema seleccionado
        },
    },
});

// Exporta las acciones
export const { loadTemas, addTema, setSelectedTema } = temasSlice.actions;

// Exporta el reducer
export default temasSlice.reducer;
