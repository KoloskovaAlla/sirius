import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { API_BASE_URL } from 'shared/constants/api';
import { mocData } from 'data/data';

const onGetForm = async (_, thunkAPI) => {
  try {
    const data = mocData;
    console.log(data.form);
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.form);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {any} */
const getForm = createAsyncThunk(
  'form/geForm',
  onGetForm,
);


/**
 * @typedef {import('./types').RegistrationData} RegistrationData
 */

const initialState = {
  isModalActive: false,
  isLoading: false,
  /** @type {null | RegistrationData} */
  formData: null,
  errorMessage: '',
  name: '',
  isValidName: false,
  surname: '',
  isValidSurname: false,
  tel: '',
  isValidTel: false,
  email: '',
  isValidEmail: false,
  isSubmitDisabled: true, 
};

export const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {   
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setIsValidName: (state, { payload }) => {
      state.isValidName = payload;
    },
    setSurname: (state, { payload }) => {
      state.surname = payload;
    },
    setIsValidSurname: (state, { payload }) => {
      state.isValidSurname = payload;
    },
    setTel: (state, { payload }) => {
      state.tel = payload;
    },
    setIsValidTel: (state, { payload }) => {
      state.isValidTel = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setIsValidEmail: (state, { payload }) => {
      state.isValidEmail = payload;
    },
    setIsSubmitDisabled: (state, { payload }) => {
      state.isSubmitDisabled = payload;
    },  
  },
  extraReducers(builder) {
    builder
      .addCase(getForm.pending, (state) => {
        state.isLoading = true;
        state.formData = null;
        state.errorMessage = '';
      })
      .addCase(getForm.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.formData = payload;
        state.errorMessage = '';
      })
      .addCase(getForm.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.formData = {};
        state.errorMessage = payload;
      })
  }

});

export { getForm };

export const { reducer: formReducer } = formSlice;
export const formActions = formSlice.actions;
