import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Register, Landing, Error, Dashboard } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Subscription Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing Page</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
