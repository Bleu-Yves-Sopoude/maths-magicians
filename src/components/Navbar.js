import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav >
    <h1 >Math Magicians</h1>
    <ul >
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;