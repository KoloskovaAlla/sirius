import classes from './LoginForm.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'shared/hooks';
import { TextField } from 'entity';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(formState.formActions.getForm());
  }, [dispatch]);

  // const {
  //   handleFormSubmit,
  //   isSubmitDisabled,
  // } = submitOptions;

  useEffect(() => {
    console.log(formState?.formData);
  }, [formState]);

  const onPasswordChange = ({ target: { value } }) => {
    dispatch(formState.formActions.setPassword(value));
    // dispatch(formState.orderActions.setIsValidasworde(validatePassword(value)));
  };
  const onEmailChange = ({ target: { value } }) => {
    dispatch(formState.formActions.setEmail(value));
    // dispatch(formState.orderActions.setIsValidasworde(validatePassword(value)));
  };

  const handleCheckboxChange = () => {
    dispatch(formState.formActions.setIsChecked(!formState.isChecked));
  };

  const onClickButton = (event) => {
    event.preventDefault();
    navigate('/shedulepage'); // Replace '/target-page' with your desired route
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

      <label className={classes.remember}>
        <input
          type={'checkbox'}
          checked={formState.isChecked}
          onChange={handleCheckboxChange}
        />
        <span>
          {formState?.formData?.inputIsRemember?.content}
        </span>
      </label>
      <button
        onClick={onClickButton}
        className={classes.submit}
        // disabled={disabled}
        type="submit"
      >
        {'Войти'}
      </button>
    </form>
  );
};
