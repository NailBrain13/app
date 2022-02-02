import React from 'react';

const NavBar = ({ totalCounters }) => {
  console.log('NavBar-Render');
  return (
    <nav className='navbar navbar-light bg-dark'>
      <a className='navbar-brand text-success' href='!#'>
        Not zero counter{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
