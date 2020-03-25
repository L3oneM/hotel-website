import React from 'react';
import Service from '../../components/Service/Service';

import { servicesData } from './serviceDate';

import './HomePage.css';

const HomePage = () => {
  return (
    <main className='text-light home-page' data-test='homePageContainer'>
      <section className='d-flex flex-column big-banner align-items-center justify-content-center'>
        <h1 className='display-3 font-weight-normal'>Resort Hotel</h1>
        <h2>Live the experience!</h2>
        <button className='btn home-btn btn-warning btn-lg mt-3'>
          Find Out More...
        </button>
      </section>
      <section className='showcase-services clearfix'>
        <h2 className='text-dark text-center my-5 pt-1'>Our Services</h2>
        {servicesData.map(service => (
          <Service key={service.id} service={service} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
