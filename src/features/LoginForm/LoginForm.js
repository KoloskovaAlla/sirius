import classes from './Form.module.scss';

import { TextField } from 'entity';

import {
  Checkbox,
  Button,
} from 'shared/ui';

export const LoginForm = () => {
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
