import React from 'react';
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
