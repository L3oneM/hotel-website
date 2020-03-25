import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import { navLinks } from './navLinksData';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-dark bg-dark text-uppercase '
      data-test='navbarComponent'
    >
      <Link to='/' className='navbar-brand ml-1' data-test='navbarLink'>
        <img
          src='/images/logo_transparent.png'
          style={{
            height: '56px',
            width: '56px'
          }}
          alt='Brand Logo'
          data-test='navbarLogo'
        />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav d-flex w-100 justify-content-between h6'>
          {navLinks.map(link => (
            <NavLink
              key={link.id}
              page={link.page}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              data-test='navbarLink'
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
