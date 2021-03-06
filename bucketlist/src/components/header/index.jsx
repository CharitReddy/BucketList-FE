import React, { useState, useEffect } from 'react';
import './Header.scss';
import useTheme from '../../customHooks/useTheme';
import NavItems from '../molecules/navItems';
import Overlay from '../atoms/overlay';
import SideBar from '../molecules/sideBar';
import Button from '../atoms/button';
import headerButtons from './headerConstants';

export default function Header() {
  const theme = useTheme();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className={`header-${theme} header`}>
      <Overlay
        isVisible={isNavVisible}
        onClick={() => setNavVisibility(false)}
      />
      <SideBar isVisible={isNavVisible} />
      {/* <button>logo</button> */}
      <div>
        {!isSmallScreen ? (
          <NavItems />
        ) : (
          <>
            {headerButtons.map((button) => (
              <Button
                buttonText={button.buttonText}
                onClick={toggleNav}
                type='button'
              />
            ))}
          </>
        )}
      </div>
    </header>
  );
}
