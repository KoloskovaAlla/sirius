import classes from './LoginPage.module.scss';
import { LoginForm } from 'features';
import { Header } from 'widgets';

/**
 * @function LoginPage
 * @returns {null | JSX.Element}
 */

export const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <Header />
      <LoginForm />
    </div>
  )
};
