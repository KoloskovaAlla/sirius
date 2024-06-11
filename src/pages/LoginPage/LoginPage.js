import classes from './LoginPage.module.scss';
import { Header } from 'widgets';
import { LoginForm, Lang } from 'features';

/**
 * @function LoginPage
 * @returns {null | JSX.Element}
 */

export const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <Header />
      <LoginForm />
      <Lang />
    </div>
  )
};
