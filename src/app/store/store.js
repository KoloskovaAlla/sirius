import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  formReducer, 
} from 'shared/reducers';

const rootReducer = combineReducers({
  formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
