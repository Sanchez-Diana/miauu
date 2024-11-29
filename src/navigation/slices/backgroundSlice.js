// src/navigation/slices/backgroundSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundImage: require('../Screen/img/fondo1.png'), // Imagen inicial
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setBackgroundImage(state, action) {
      state.backgroundImage = action.payload;
    },
  },
});

export const { setBackgroundImage } = backgroundSlice.actions;
export const selectBackgroundImage = (state) => state.background.backgroundImage;
export default backgroundSlice.reducer;
