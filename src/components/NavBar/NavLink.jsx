import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ currentPage, setCurrentPage, page }) => {
  return (
    <li className='nav-item m-auto' data-test='linkComponent'>
      <Link
        to={`/${page === 'home' ? '' : page}`}
        className={`nav-link ${currentPage === page ? 'active' : ''}`}
        onClick={() => setCurrentPage(page)}
        data-test='clickedlinkComponent'
      >
        {page}
        {currentPage === page ? (
          <span className='sr-only'>(current)</span>
        ) : null}
      </Link>
    </li>
  );
};

export default NavLink;
