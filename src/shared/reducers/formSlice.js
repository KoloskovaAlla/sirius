import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mocData } from 'data/data';

const onGetForm = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const data = mocData;
    // console.log(data.form);
    if (data.message) throw new Error(data.message);

    return thunkAPI.fulfillWithValue(data[lang].form);
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

  isLoading: false,
  /** @type {null | RegistrationData} */
  formData: null,
  errorMessage: '',
  email: '',
  isValidEmail: true,
  password: '',
  isValidPassword: false,
  isPasswordVisible: false,
  isSubmitDisabled: true,
  isChecked: false,
  isFormValid: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setIsValidEmail: (state, { payload }) => {
      state.isValidEmail = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    setIsValidPassword: (state, { payload }) => {
      state.isValidPassword = payload;
    },
    setIsPasswordVisible: (state, { payload }) => {
      state.isPasswordVisible = payload;
    },
    setIsSubmitDisabled: (state, { payload }) => {
      state.isSubmitDisabled = payload;
    },
    setIsChecked: (state, { payload }) => {
      state.isChecked = payload;
    },
    setIsFormValid: (state, { payload }) => {
      state.isFormValid = payload;
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
