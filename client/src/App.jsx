import React from 'react';
import './index.js';
import Homepage from './Homepage';
import Active from './Active';
import { BrowserRouter, BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<h1>Please Login</h1>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/active' element={<Active/>}/>
        </Routes>

      </div>
      <div className='links'>
        <Link to="/home">Home Page</Link>
        <Link to="/active">Active Subscription</Link>
      </div>
    </Router>

     
  );
};

export default App;