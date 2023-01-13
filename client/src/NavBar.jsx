import React from 'react';
import { NavLink, Link, useResolvedPath, useMatch } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard" className='title'>Sublify</Link>
      <ul className="links">
        <li><NavLink activeClassName="active" to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink activeClassName="active" to='/active'>Active Subscriptions</NavLink></li>
        <li><NavLink activeClassName="active" to='/summary'>Summary</NavLink></li>
        <li><NavLink activeClassName="active" to='/pastsubscriptions'>Past Subscriptions</NavLink></li>
        <li><NavLink activeClassName="active" to="/" className="signout">Sign Out</NavLink></li>
      </ul>
    </nav>  
  );
};
 
export default NavBar;