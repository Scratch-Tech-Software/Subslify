import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isRegistered: true,
  user: null,
};

const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();

  const toggleMember = () => {
    setNewUser({ ...newUser, isRegistered: !newUser.isRegistered });
  };

  // TODO: add useEffect to fetch user data from server
  // TODO: use global context to manage user state

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isRegistered } = newUser;
    if (!email || !password || (!isRegistered && !name)) {
      displayAlert();
      return;
    }
    if (isRegistered) {
      console.log("already registered, let's login");
      return;
    }
    console.log('register user', { name, email, password });
    registerUser({ name, email, password });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  }, [user, navigate]);

  return (
    <section className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{newUser.isRegistered ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!newUser.isRegistered && (
          <FormRow
            type='text'
            name='name'
            value={newUser.name}
            handleChange={handleChange}
            autocomplete='name'
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={newUser.email}
          handleChange={handleChange}
          autocomplete='email'
        />
        <FormRow
          type='password'
          name='password'
          value={newUser.password}
          handleChange={handleChange}
          autocomplete='current-password'
        />

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {newUser.isRegistered
            ? "Don't have an account?"
            : 'Already have an account?'}
        </p>
        <button type='button' className='member-btn' onClick={toggleMember}>
          {newUser.isRegistered ? 'Register' : 'Login'}
        </button>
      </form>
    </section>
  );
};
export default Register;
