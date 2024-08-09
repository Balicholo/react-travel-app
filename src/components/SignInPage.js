import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (email === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    // Clear any existing errors
    setError('');

    // Redirect to the contact page
    navigate('/contact');
  };

  return (
    <div className='contact-section'>
    <div className='sign-in-page'>
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email address'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'></label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <button type='submit' className='sign-in-button'>
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <a href='/contact'>Create one now</a>
      </p>
    </div>
    </div>
  );
}

export default SignInPage;

