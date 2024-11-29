import { configureStore } from '@reduxjs/toolkit';
import temasReducer from './slices/temasSlice';
import backgroundReducer from './slices/backgroundSlice';

const store = configureStore({
    reducer: {
        temas: temasReducer,
        background: backgroundReducer,
    },
});

export default store;
