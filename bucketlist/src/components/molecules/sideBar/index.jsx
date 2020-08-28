import React from 'react';
import './sideBar.scss';
import NavItems from '../navItems';

const SideBar = ({ isVisible }) => (
  <div className={isVisible ? `sidebar sidebar-open` : 'sidebar'}>
    <NavItems className='sidebar-nav-items' isSideNav />
  </div>
);

export default SideBar;
