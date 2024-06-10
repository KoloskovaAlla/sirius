import classes from './Lang.module.scss';
import { useDispatch } from 'react-redux';
import { useLang } from 'shared/hooks';
import { Select } from 'shared/ui';
import { classNames } from 'shared/utils';

/**
 * @function Lang
 * @returns {null | JSX.Element}
 */

export const Lang = () => {
  const dispatch = useDispatch();

  const { lang, langs, setLang } = useLang();
      
  const handleLangClick = (event) => {
    console.log(event.target.textContent)
    dispatch(setLang(event.target.textContent));
  };

  const classNamesRu = classNames(classes.ru, {
    [classes.active]: lang === 'ru',
  });

  const classNamesEn = classNames(classes.en, {
    [classes.active]: lang === 'en',
  });


 return (
    <div className={classes.langs}>
      <div
        className={classNamesRu}
        onClick={handleLangClick}
      >
        ru
      </div>
      <div
        className={classNamesEn}
        onClick={handleLangClick}
      >
        en
      </div>
    </div>
  );
};
