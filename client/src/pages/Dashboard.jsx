import { Card } from '@mui/material/';
import { Link } from 'react-router-dom';
// import { Register, Landing, Error, Active } from './pages';

const Dashboard = () => {
  return (
    <section>
      <h3>Subscriptions Dashboard</h3>
      <Card>
        <Link to='/active'>Active Subscriptions</Link>
      </Card>
      <Card>
        <Link to='/trials'>Trial Subscriptions</Link>
      </Card>
      <Card>
        <Link to='/summary'>Summary Subscriptions</Link>
      </Card>
      <Card>
        <Link to='/past'>Past Subscriptions</Link>
      </Card>
    </section>
  );
};
export default Dashboard;
