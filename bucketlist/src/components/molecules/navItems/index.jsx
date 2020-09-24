import React from 'react';
import './navItems.scss';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { NavBarItems } from './navItemsConstants';
import Button from '../../atoms/button';
import useChangeTheme from '../../../customHooks/changeTheme';
import { USER_APIs } from '../../../services/apiCalls';
import useTheme from '../../../customHooks/useTheme';

const NavItems = ({ isSideNav }) => {
  const history = useHistory();
  const theme = useTheme();
  const logoutUser = () => {
    USER_APIs.userLogout()
      .then(() => {
        localStorage.clear();
        history.push('/login');
      })
      .catch((error) => {
        localStorage.clear();
        history.push('/login');
        console.log(error);
      });
  };

  return (
    <nav className={isSideNav ? `sidebar-nav` : `nav nav-${theme}`}>
      <div className='navbar-links'>
        {NavBarItems.map((item) => (
          <Link to={item.href} key={`nav-items-${item.href}`}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className='navbar-buttons'>
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
      </div>
    </nav>
  );
};

export default NavItems;

NavItems.propTypes = { isSideNav: PropTypes.bool };
NavItems.defaultProps = { isSideNav: false };
