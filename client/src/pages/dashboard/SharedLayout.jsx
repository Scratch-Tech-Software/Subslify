import { Outlet, Link } from 'react-router-dom';
import { Navbar, LargeSidebar, SmallSidebar } from '../../components';
import '../../assets/styles/shared-layout.scss';

const SharedLayout = () => {
  return (
    <div className='shared-layout'>
      <div className='dashboard'>
        <SmallSidebar />
        <LargeSidebar />

        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
