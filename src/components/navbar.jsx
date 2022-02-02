import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='!#'>
        Not zero counter{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
