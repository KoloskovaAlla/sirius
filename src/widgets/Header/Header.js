import classes from './Header.module.scss'; 
import { IconLogoHeader } from 'shared/icons';

export const Header = () => {
  return (
    <div className={classes.header}>
      <IconLogoHeader />
      <h1 className={classes.title}>Вход в Sirius Future</h1>
    </div>
  );
};
