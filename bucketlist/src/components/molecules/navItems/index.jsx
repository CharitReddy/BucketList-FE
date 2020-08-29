import React from 'react';
import './navItems.scss';
import PropTypes from 'prop-types';
import { NavBarItems, NavBarButtons } from './navItemsConstants';
import Button from '../../atoms/button';

const NavItems = ({ isSideNav }) => {
  return (
    <nav className={isSideNav ? `sidebar-nav` : `nav`}>
      {NavBarItems.map((item) => (
        <a href={item.href}>{item.text}</a>
      ))}

      {NavBarButtons.map((navButtons) => (
        <Button
          buttonText={navButtons.buttonText}
          onClick={() => {}}
          type='button'
          className='logoutButton'
        />
      ))}
    </nav>
  );
};

export default NavItems;

NavItems.propTypes = { isSideNav: PropTypes.bool.isRequired };
