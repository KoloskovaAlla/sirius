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
  // const { isModalActive } = state;

  // useEffect(() => {
  //   localStorage.setItem('isModalActive', isModalActive);
  // }, [isModalActive]);

  useEffect(() => {
    const isFormDataValid = state.isValidEmail && state.isValidPassword
    dispatch(formActions.setIsSubmitDisabled(!isFormDataValid));
  }, [dispatch, state]);


  Object.assign(formActions, { getForm });

  return {
    ...state,
    formActions,
  };
};
