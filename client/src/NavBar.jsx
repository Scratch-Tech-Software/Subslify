import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const NavBar = () => {
  return (  
    <nav className="navbar">
      <Link to="/dashboard" className='title'>Sublify</Link>
      <ul className="links">
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/landing'>Landing Page</Link></li>
        <li><Link to='/active'>Active Subscriptions</Link></li>
      </ul>
    </nav>
  );
};
 
export default NavBar;