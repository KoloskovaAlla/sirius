import classes from './Header.module.scss';
import { IconLogoHeader } from 'shared/icons';
import { useForm } from 'shared/hooks';

export const Header = () => {
  const formState = useForm();

  return (
    <div className={classes.header}>
      <IconLogoHeader />
      <h1 className={classes.title}> {formState?.formData?.title?.content}</h1>
    </div>
  );
};
