import React from 'react';
import './navItems.scss';
import PropTypes from 'prop-types';
import { NavBarItems, NavBarButtons } from './navItemsConstants';
import Button from '../../atoms/button';
import useChangeTheme from '../../../customHooks/changeTheme';

const NavItems = ({ isSideNav }) => {
  return (
    <nav className={isSideNav ? `sidebar-nav` : `nav`}>
      {NavBarItems.map((item) => (
        <a href={item.href}>{item.text}</a>
      ))}
      <Button
        id='changeThemeButton'
        buttonText='Change Theme'
        onClick={useChangeTheme()}
      />
      {NavBarButtons.map((navButtons) => (
        <Button
          id={navButtons.id}
          buttonText={navButtons.buttonText}
          onClick={navButtons.onClick}
          type={navButtons.type}
          className={navButtons.className}
        />
      ))}
    </nav>
  );
};

export default NavItems;

NavItems.propTypes = { isSideNav: PropTypes.bool.isRequired };
