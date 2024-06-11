import classes from './LoginForm.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, useLang } from 'shared/hooks';
import { IconPasswordVisible, IconPasswordHidden } from 'shared/icons';
import { validateEmail } from 'shared/utils';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formState = useForm();
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    dispatch(formState.formActions.getForm());
  }, [dispatch, lang]);

  const onEmailChange = ({ target: { value } }) => {
    dispatch(formState.formActions.setEmail(value));
    dispatch(formState.formActions.setIsValidEmail(validateEmail(value)));
  };

  const onPasswordChange = ({ target: { value } }) => {
    dispatch(formState.formActions.setPassword(value));
  };

  const handleCheckboxChange = () => {
    dispatch(formState.formActions.setIsChecked(!formState.isChecked));
  };

  const onClickButton = (event) => {
    event.preventDefault();
    navigate('/shedulepage');
  };

  const togglePasswordVisibility = () => {
    console.log('клик');
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <form className={classes.form}>
      <label className={classes.email}>
        <input
          type="text"
          placeholder={formState?.formData?.inputEmail?.placeholder}
          value={formState?.formData?.value}
          onChange={onEmailChange}
        />
        {!formState.isValidEmail && <span>{formState?.formData?.inputEmail?.invalidMessage}</span>}
      </label>

      <label className={classes.password}>
        <div className={classes.passwordWrapper}>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder={formState?.formData?.inputPassword?.placeholder}
            value={formState?.formData?.inputPassword?.password}
            onChange={onPasswordChange}
          />
          <button type="button" onClick={togglePasswordVisibility} className={classes.iconButton}>
            {isPasswordVisible ? <IconPasswordVisible /> : <IconPasswordHidden />}
          </button>
        </div>
      </label>

      <label className={classes.remember}>
        <input
          type="checkbox"
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
        type="submit"
      >
        {formState?.formData?.loginButton?.content}
      </button>
    </form>
  );
};
