import React from 'react';

const SignUp = () => {
  return (
    <form className='p-2'>
      <div className='form-group'>
        <label className='h5' htmlFor='signupUsername'>
          Username
        </label>
        <input type='text' className='form-control' id='signupUsername' />
      </div>
      <div className='form-group'>
        <label className='h5' htmlFor='signUpEmail'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          aria-describedby='emailHelp'
          id='signUpEmail'
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label className='h5' htmlFor='signUpPassword'>
          Password
        </label>
        <input type='password' className='form-control' id='signUpPassword' />
      </div>
      <div className='form-group'>
        <label className='h5' htmlFor='confirmPassword'>
          Confirm Password
        </label>
        <input type='password' className='form-control' id='confirmPassword' />
      </div>
      <button type='submit' className='btn btn-dark'>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
