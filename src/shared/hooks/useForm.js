import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import { useDispatch } from 'react-redux';
import { formActions, getForm } from 'shared/reducers/formSlice';

/**
 * @typedef {import('./types').FormState} FormState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */
const getState = (store) => store.formReducer;

// /**
//  * @function useForm
//  * @returns {FormState}
//  */

export const useForm = () => {
  const dispatch = useDispatch();
  const state = useSelector(getState);


  useEffect(() => {
    const isFormDataValid = state.isValidEmail && state.isValidPassword
    dispatch(formActions.setIsSubmitDisabled(!isFormDataValid));
    console.log(state.isValidPassword)
  }, [dispatch, state]);


  Object.assign(formActions, { getForm });

  return {
    ...state,
    formActions,
  };
};
