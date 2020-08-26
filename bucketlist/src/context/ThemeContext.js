import createDataContext from './createDataContext';
import { THEME_DARK, THEME_LIGHT } from './themeConstants';

const INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_LIGHT:
      return {
        ...state,
        theme: 'light',
      };
    case THEME_DARK:
      return {
        ...state,
        theme: 'dark',
      };
    default:
      return state;
  }
};

const changeTheme = (dispatch) => (theme) => {
  dispatch({ type: theme });
};

export const { Context, Provider } = createDataContext(
  themeReducer,
  {
    changeTheme,
  },
  INITIAL_STATE
);
