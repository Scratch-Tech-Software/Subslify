import React from 'react';
import './index.js';
import { BrowserRouter, BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import { Active, Register, Landing, Error, Dashboard } from './pages';
import NavBar from './NavBar';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <div className="app">
        <Routes>
          <Route path='/' element={<h1>Please Login</h1>}/>
          <Route path='/active' element={<Active/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router> 
  );
};

export default App;