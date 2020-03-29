import React from 'react';

const Footer = () => {
  return (
    <footer
      className='w-100 bg-dark text-light container-fluid mt-5'
      data-test='footerComponent'
    >
      <div className='row p-4 text-center'>
        <div className='col-sm-6 '>
          <img
            src='/images/logo_transparent.png'
            style={{
              height: '128px',
              width: '128px'
            }}
            alt='Brand Logo'
            data-test='footerLogo'
          />
        </div>
        <div className='col-sm-6' data-test='footerInfo'>
          <p className='h6 mt-3'>82606 Morar Streets</p>
          <p className='h6'>Venezuela</p>
          <p className='h6'>Phone: (148) 574-9349</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
