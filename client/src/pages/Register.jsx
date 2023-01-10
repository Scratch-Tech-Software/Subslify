import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isRegistered: true,
  showAlert: false,
};

const Register = () => {
  const [user, setUser] = useState(initialState);

  const toggleMember = () => {
    setUser({ ...user, isRegistered: !user.isRegistered });
  };

  // TODO: add useEffect to fetch user data from server
  // TODO: use global context to manage user state

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{user.isRegistered ? 'Login' : 'Register'}</h3>
        {user.showAlert && <Alert />}
        {!user.isRegistered && (
          <FormRow
            type='text'
            name='name'
            value={user.name}
            handleChange={handleChange}
            autocomplete='name'
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={user.email}
          handleChange={handleChange}
          autocomplete='email'
        />
        <FormRow
          type='password'
          name='password'
          value={user.email}
          handleChange={handleChange}
          autocomplete='current-password'
        />

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {user.isRegistered
            ? "Don't have an account?"
            : 'Already have an account?'}
        </p>
        <button type='button' className='member-btn' onClick={toggleMember}>
          {user.isRegistered ? 'Register' : 'Login'}
        </button>
      </form>
    </section>
  );
};
export default Register;
