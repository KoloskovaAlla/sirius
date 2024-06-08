import classes from './LoginForm.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'shared/hooks';
import { TextField } from 'entity';

import {
  Checkbox,
  Button,
} from 'shared/ui';

// /**
//  * @typedef {import('./types').FormProps} FormProps
//  * @typedef {import('react').ReactElement} Element
//  */

// /**
//  * @function LoginForm
//  * @param {FormProps} props
//  * @returns {Element}
//  */

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formState = useForm();

    useEffect(() => {    
    dispatch(formState.formActions.getForm());
  }, [dispatch]);

  // const {
  //   emailOptions,  
  //   passwordOptions,
  //   checkboxOptions,
  //   submitOptions,
  // } = formOptions;

  // const {
  //   handleFormSubmit,
  //   isSubmitDisabled,
  // } = submitOptions;

  useEffect(() => {}, []);

  return (
    <form>
      {/* {emailOptions && (
        <TextField
          className={classes.email}
          options={emailOptions}
        />
      )}
      {passwordOptions && (
        <TextField
          className={classes.password}
          options={passwordOptions}
        />
      )}
      <label className={classes.remeber}>
        <Checkbox
          options={checkboxOptions}
        />   
      </label>
      <Button
        className={classes.eneter}
        label='enter'
        content={'text'}
        disabled={isSubmitDisabled}
      /> */}
    </form>
  );
};
