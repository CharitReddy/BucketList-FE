import React from 'react';
import './navItems.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { NavBarItems } from './navItemsConstants';
import Button from '../../atoms/button';
import useChangeTheme from '../../../customHooks/changeTheme';
import { USER_APIs } from '../../../services/apiCalls';

const NavItems = ({ isSideNav }) => {
  const history = useHistory();
  const logoutUser = () => {
    USER_APIs.userLogout()
      .then(() => {
        localStorage.clear();
        history.push('/login');
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className={isSideNav ? `sidebar-nav` : `nav`}>
      {NavBarItems.map((item) => (
        <a href={item.href} key={`nav-items-${item.href}`}>
          {item.text}
        </a>
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

NavItems.propTypes = { isSideNav: PropTypes.bool };
NavItems.defaultProps = { isSideNav: false };
