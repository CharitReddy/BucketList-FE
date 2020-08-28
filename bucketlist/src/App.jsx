import React, { useContext } from 'react';
// import './App.css';
import Button from './components/atoms/button';
import { Context as themeContext } from './context/ThemeContext';
import { THEME_LIGHT, THEME_DARK } from './context/themeConstants';
import Routes from './components/routes';
import './App.scss';
import useTheme from './customHooks/useTheme';

function App() {
  const theme = useTheme();

  return (
    <>
      <div className={`app-container theme-${theme}`}>
        <Routes />
      </div>
    </>
  );
}
export default App;
