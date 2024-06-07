import classes from './Form.module.scss';

import { TextField } from 'entity';

import {
  Checkbox,
  Button,
} from 'shared/ui';

/**
 * @typedef {import('./types').FormProps} FormProps
 * @typedef {import('react').ReactElement} Element
 */

/**
 * @function LoginForm
 * @param {FormProps} props
 * @returns {Element}
 */

export const LoginForm = ({ formOptions}) => {
  const {
    emailOptions,  
    passwordOptions,
    checkboxOptions,
    submitOptions,
  } = formOptions;

  const {
    handleFormSubmit,
    isSubmitDisabled,
  } = submitOptions;

  return (
    <form>
      {emailOptions && (
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
      />
    </form>
  );
};
