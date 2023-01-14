import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';

import '../assets/styles/large-sidebar.scss';

const LargeSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <aside className='large-sidebar'>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};

export default LargeSidebar;
