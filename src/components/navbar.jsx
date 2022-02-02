import React from 'react';

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='!#'>
        Not zero counter{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
