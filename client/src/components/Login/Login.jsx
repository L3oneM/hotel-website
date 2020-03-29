import React from 'react';

const Login = () => {
  return (
    <form className='p-2 mr-sm-4'>
      <div className='form-group'>
        <label className='h5' htmlFor='loginEmail'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          aria-describedby='emailHelp'
          id='loginEmail'
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label className='h5' htmlFor='loginPassword'>
          Password
        </label>
        <input type='password' className='form-control' id='loginPassword' />
      </div>
      <button type='submit' className='btn btn-dark'>
        Login
      </button>
    </form>
  );
};

export default Login;
