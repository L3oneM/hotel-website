import React from 'react';

import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';

import './LoginAndSignUpPage.css';

const LoginAndSignUpPage = () => {
  return (
    <main className='p-2 logandSignupContainer d-flex align-items-center justify-content-center mx-auto flex-md-row flex-column'>
      <div className='login-container w-75 mb-5'>
        <h1 className='text-center text-sm-left p-1'>Login</h1>
        <Login />
      </div>
      <div className='signUp-container w-75'>
        <h1 className='text-center text-sm-left p-1'>Sign Up</h1>
        <SignUp />
      </div>
    </main>
  );
};

export default LoginAndSignUpPage;
