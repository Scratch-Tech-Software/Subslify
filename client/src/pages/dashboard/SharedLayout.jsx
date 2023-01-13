import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to='active'>Active Subscriptions</Link>
        <Link to='trial'>Trial Subscriptions</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
