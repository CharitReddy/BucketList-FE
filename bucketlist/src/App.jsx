import React, { useContext } from 'react';
import './App.css';
import Button from './Components/Atoms/Button';
import { Context as themeContext } from './context/ThemeContext';
import { THEME_LIGHT, THEME_DARK } from './context/themeConstants';
import Routes from '../src/Components/routes';

function App() {
  const { state, changeTheme } = useContext(themeContext);
  const { theme } = state;

  return (
    <>
      <div>
        <Routes />
      </div>
    </>
  );
}
export default App;
