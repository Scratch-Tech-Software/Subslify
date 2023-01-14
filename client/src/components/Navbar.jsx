import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';

import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import '../assets/styles/navbar.scss';

const Navbar = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3>Active Subscriptions</h3>
        </div>

        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
