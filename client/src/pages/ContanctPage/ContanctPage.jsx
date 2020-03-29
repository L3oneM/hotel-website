import React from 'react';

import './ContanctPage.css';

const ContanctPage = () => {
  return (
    <main className='contact-page text-center'>
      <h1 className='py-2'>contact us...</h1>
      <img
        src='./images/services-img/seaview.jpg'
        alt='contact page'
        className='w-75 contact-img mx-auto d-block'
      ></img>
      <p className='h4 mt-4'>Do you have any questions?</p>
      <p className='h6'>Phone: 655.560.6450</p>
      <p className='h6'>Email: test@email.com</p>

      <p className='h4 mt-4'>For Cancelations and changes...</p>
      <p className='h6'>Phone: 655.560.6451</p>
      <p className='h6'>Email: test2@email.com</p>
    </main>
  );
};

export default ContanctPage;
