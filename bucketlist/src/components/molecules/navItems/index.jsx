import React from 'react';
import './navItems.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { NavBarItems } from './navItemsConstants';
import Button from '../../atoms/button';
import useChangeTheme from '../../../customHooks/changeTheme';

const NavItems = ({ isSideNav }) => {
  const history = useHistory();
  const logoutUser = () => {
    localStorage.clear();
    history.push('/login');
  };

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
      <Button
        buttonText='Logout'
        id='logoutButton'
        className='logout-button'
        type='Button'
        onClick={logoutUser}
      />
    </nav>
  );
};

export default NavItems;

NavItems.propTypes = { isSideNav: PropTypes.bool.isRequired };
