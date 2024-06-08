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
  //   handleFormSubmit,
  //   isSubmitDisabled,
  // } = submitOptions;

  const onPasswordChange = ({ target: { value } }) => {
    dispatch(formState.formActions.setPassword(value));
    // dispatch(formState.orderActions.setIsValidasworde(validatePassword(value)));
  };
  const onEmailChange = ({ target: { value } }) => {
    dispatch(formState.formActions.setEmail(value));
    // dispatch(formState.orderActions.setIsValidasworde(validatePassword(value)));
  };

  return (
    <form className={classes.form}>
      {/* <label className={className}> */}
      <label className={classes.email}>
        <input
          type="text"
          placeholder={formState?.formData?.inputEmail.placeholder}
          value={formState?.formData?.value}
          onChange={onEmailChange}
        />

        {/* {!isValidField && <span>{invalidMessage}</span>} */}
      </label>

      <label className={classes.password}>
        <input
          type="text"
          placeholder={formState?.formData?.inputPassword.placeholder}
          value={formState?.formData?.inputEmail.password}
          onChange={onPasswordChange}
        />

        {/* {!isValidField && <span>{invalidMessage}</span>} */}
      </label>

      {/* {passwordOptions && (
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
      />  */}
    </form>
  );
};
