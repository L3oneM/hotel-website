import React from 'react';

import './Carousel.css';

const Carousel = ({ images, name }) => {
  console.log(images);
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide room-carousel mx-auto'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        {images.map((image, i) => (
          <li
            key={i}
            data-target='#carouselExampleIndicators'
            data-slide-to={i}
            className={i === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className='carousel-inner'>
        {images.map((image, i) => (
          <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
            <img
              src={image.fields.file.url}
              className='d-block w-100'
              alt={`${name}`}
            />
          </div>
        ))}
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
};

export default Carousel;
