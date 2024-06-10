import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  formReducer, 
  langsReducer,
} from 'shared/reducers';

const rootReducer = combineReducers({
  formReducer,
  langsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
