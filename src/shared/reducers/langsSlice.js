import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mocData } from 'data/data';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').LangsFromAPI} LangsFromAPI
 */

/**
 * @typedef {import('./types').Lang} Lang
 */

const initialState = {
  lang: 'ru',
};

const langsSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});
export const { reducer: langsReducer } = langsSlice;
export const { setLang } = langsSlice.actions;
