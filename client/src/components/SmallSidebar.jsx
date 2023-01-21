import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Logo from './Logo';

import { FaTimes } from 'react-icons/fa';
import '../assets/styles/small-sidebar.scss';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <aside className='small-sidebar'>
      <div className={`sidebar-container ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className='content'>
          <button className='close-btn' type='button' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <h3>Subslify</h3>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </aside>
  );
};

export default SmallSidebar;
