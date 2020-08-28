import { useContext } from 'react';
import { Context as themeContext } from '../context/ThemeContext';

export default () => {
  const {
    state: { theme },
  } = useContext(themeContext);
  return theme;
};
