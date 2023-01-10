import { Card, CardContent } from '@mui/material/';
import { Link } from 'react-router-dom';
// import { Register, Landing, Error, Active } from './pages';
import '../assets/styles/dashboard.scss';

const Dashboard = () => {
  return (
    <section className='dashboardContainer'>
      <h3>Subscriptions Dashboard</h3>

      <div className='item-active'>
        <Card>
          <CardContent>
            <Link to='/active'>Active Subscriptions</Link>
          </CardContent>
        </Card>
      </div>

      <div className='item-trails'>
        <Card>
          <CardContent>
            <Link to='/trials'>Trial Subscriptions</Link>
          </CardContent>
        </Card>
      </div>
      <div className='item-summary'>
        <Card>
          <CardContent>
            <Link to='/summary'>Summary Subscriptions</Link>
          </CardContent>
        </Card>
      </div>
      <div className='item-past'>
        <Card>
          <CardContent>
            <Link to='/past'>Past Subscriptions</Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default Dashboard;
