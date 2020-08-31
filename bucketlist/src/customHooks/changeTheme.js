import { useContext } from 'react';
import { Context as ThemeContext } from '../context/ThemeContext';
import {
  PAYLOAD_DARK,
  PAYLOAD_LIGHT,
  THEME_DARK,
  THEME_LIGHT,
} from '../context/themeConstants';

export default () => {
  const { state, changeTheme } = useContext(ThemeContext);
  const { theme } = state;

  switch (theme) {
    case PAYLOAD_LIGHT:
      return () => changeTheme(THEME_DARK, PAYLOAD_DARK);
    case PAYLOAD_DARK:
      return () => changeTheme(THEME_LIGHT, PAYLOAD_LIGHT);
    default:
      return () => changeTheme(THEME_DARK, PAYLOAD_DARK);
  }
};
