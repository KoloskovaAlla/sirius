import classes from './Form.module.scss';

import { TextField } from 'entity';

import {
  Checkbox,
  Button,
} from 'shared/ui';

export const LoginForm = ({ formOptions}) => {
  const {
    emailOptions,  
    passwordOptions,
    checkboxOptions,
    enterOptions,
  } = formOptions;

  const {
    handleFormSubmit,
    isSubmitDisabled,
  } = enterOptions;

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
