import React from 'react';

import './Service.css';

const Service = ({ service: { id, title, desc, img } }) => {
  return (
    <div
      className={`card text-dark w-75 m-3 mb-5 service-card float-${
        id % 2 === 1 ? 'left' : 'right'
      }`}
      data-aos={`fade-${id % 2 === 0 ? 'left' : 'right'}`}
      data-aos-duration='1000'
      data-test='serviceComponent'
    >
      <div className='row'>
        <img
          src={`/images/services-img/${img}`}
          className='card-img col-md-6 service-img'
          alt='Private Pool Suite'
          data-test='serviceImg'
        />
        <div
          className='card-body text-center col-md-6 d-flex align-items-center justify-content-center flex-column'
          data-test='serviceInfocontainer'
        >
          <h4 className='card-title text-capitalize'>{title}</h4>
          <p className='card-text'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
