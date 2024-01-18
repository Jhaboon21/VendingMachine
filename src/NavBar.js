import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">{({ isActive }) => ( <span className={isActive ? 'active' : "" }>Home</span>)}</NavLink>
      <NavLink to="/soda">{({ isActive }) => ( <span className={isActive ? 'active' : "" }>Soda</span>)}</NavLink>
      <NavLink to="/chips">{({ isActive }) => ( <span className={isActive ? 'active' : "" }>Chips</span>)}</NavLink>
      <NavLink to="/candy">{({ isActive }) => ( <span className={isActive ? 'active' : "" }>Candy</span>)}</NavLink>
    </nav>
  );
}

export default NavBar;