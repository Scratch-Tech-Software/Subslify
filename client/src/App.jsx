import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Register, Landing, Error } from './pages';
import { Active, Past, Summary, Trial, SharedLayout } from './pages/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Subscription Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing Page</Link>
      </nav>
      <Routes>
        <Route path='/'>
          <Route path='active' element={<Active />} />
          <Route path='trial' element={<Trial />} />
          <Route path='past' element={<Past />} />
          <Route path='summary' element={<Summary />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
