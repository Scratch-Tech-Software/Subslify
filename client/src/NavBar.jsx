import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (  
    <nav className="navbar">
      <div className="links">
        <Link to='/'>Subscription Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing Page</Link>
        <Link to='/active'>Active Subscriptions</Link>
      </div>
    </nav>
  );
};
 
export default NavBar;