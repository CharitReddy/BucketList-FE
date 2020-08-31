import React from 'react';
import './sideBar.scss';
import NavItems from '../navItems';
import useTheme from '../../../customHooks/useTheme';

const SideBar = ({ isVisible }) => {
  const theme = useTheme();
  return (
    <div
      className={
        isVisible ? `sidebar sidebar-open sidebar-${theme}` : 'sidebar'
      }>
      <NavItems className='sidebar-nav-items' isSideNav />
    </div>
  );
};

export default SideBar;
