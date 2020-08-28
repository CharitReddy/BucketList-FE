import React from 'react';
import './navItems.scss';

const NavItems = ({ isSideNav }) => {
  return (
    <nav className={isSideNav ? `sidebar-nav` : `nav`}>
      <a href='/'>Home</a>
      <a href='/'>Articles</a>
      <a href='/'>About</a>
      <button>Logout</button>
    </nav>
  );
};

export default NavItems;
