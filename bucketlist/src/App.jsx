import React, { useContext } from 'react';
import './App.css';
import Button from './Components/Atoms/Button';
import { Context as themeContext } from './context/ThemeContext';
import { THEME_LIGHT, THEME_DARK } from './context/themeConstants';

function App() {
  const { state, changeTheme } = useContext(themeContext);
  const { theme } = state;

  return (
    <>
      <div>
        <Button
          onClick={() => {
            console.log(theme);
            changeTheme(theme === 'light' ? THEME_DARK : THEME_LIGHT);
            console.log(theme);
          }}
          buttonText='Click me!'
        />
      </div>
    </>
  );
}
export default App;
