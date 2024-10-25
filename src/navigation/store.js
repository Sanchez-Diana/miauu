// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import temasReducer from './slices/temasSlice';

const store = configureStore({
    reducer: {
        temas: temasReducer,
        // Otros reducers si los tienes
    },
});

export default store;
