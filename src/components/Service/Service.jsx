import React from 'react';
import PropTypes from 'prop-types';

import './Service.css';

const Service = ({ service: { id, title, desc, img } }) => {
  return (
    <div
      className={`card text-dark service-card w-75 mt-3 mb-md-5 my-3 align-self-md-${
        id % 2 === 1 ? 'start ml-md-5' : 'end mr-md-5'
      }`}
      data-aos={`fade-${id % 2 === 0 ? 'left' : 'right'}`}
      data-aos-duration='1000'
      data-test='serviceComponent'
    >
      <div className='row'>
        <img
          src={`/images/services-img/${img}`}
          className='card-img col-md-6 service-img pl-md-0 m-auto'
          alt='Private Pool Suite'
          data-test='serviceImg'
        />
        <div
          className='card-body text-center col-md-6 d-flex align-items-center justify-content-center flex-column'
          data-test='serviceInfocontainer'
        >
          <h4 className='card-title text-capitalize'>{title}</h4>
          <p className='card-text p-2'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string
};

export default Service;
