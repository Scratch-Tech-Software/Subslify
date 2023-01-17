import { useState } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import '../../assets/styles/form.scss';
import '../../assets/styles/profile.scss';

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      return displayAlert('Please enter your name');
    }
    if (!email) {
      return displayAlert('Please enter your email');
    }

    updateUser({ name, email });
  };

  return (
    <section className='profile-page'>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            placeholder='Enter your name'
            handleChange={(e) => setName(e.target.value)}
            labelText='Name'
            autocomplete='name'
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            handleChange={(e) => setEmail(e.target.value)}
            labelText='Email'
            autocomplete='email'
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Update Profile'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
