import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ currentPage, setCurrentPage, page }) => {
  return (
    <li
      className='nav-item m-auto'
      data-test='linkComponent'
      data-toggle='collapse'
      data-target='.navbar-collapse.show'
    >
      <Link
        to={`/${page === 'home' ? '' : page}`}
        className={`nav-link ${currentPage === page ? 'active' : ''}`}
        onClick={() => setCurrentPage(page)}
        data-test='clickedlinkComponent'
      >
        {page === 'login' ? 'LOGIN/SIGNUP' : page}
        {currentPage === page ? (
          <span className='sr-only'>(current)</span>
        ) : null}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  currentPage: PropTypes.oneOf(['home', 'rooms', 'contact', 'login']),
  setCurrentPage: PropTypes.func.isRequired,
  page: PropTypes.string
};

export default NavLink;
