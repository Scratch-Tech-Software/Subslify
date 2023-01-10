import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Landing, Error, Dashboard } from './pages';
import Active from './pages/Active';
import NavBar from './NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/active' element={<Active />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;