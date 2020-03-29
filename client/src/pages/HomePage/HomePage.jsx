import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../../components/Service/Service';

import { servicesData } from './serviceDate';

import './HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  return (
    <main className='text-light home-page' data-test='homePageContainer'>
      <section className='d-flex flex-column big-banner align-items-center justify-content-center'>
        <h1 className='display-4 font-weight-normal'>Resort Hotel</h1>
        <h2>Live the experience!</h2>
        <Link
          to='/rooms'
          className='btn home-btn btn-warning btn-lg mt-3'
          onClick={() => setCurrentPage('rooms')}
        >
          Find Out More...
        </Link>
      </section>
      <section className='showcase-servicse d-flex flex-column align-items-center'>
        <h2 className='text-dark text-center my-md-5 pt-1 my-3'>
          Our Services
        </h2>
        {servicesData.map(service => (
          <Service key={service.id} service={service} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
