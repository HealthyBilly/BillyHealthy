import React from 'react';
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  HealthyLogo
} from './NavBarElements.js';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <Nav>
        <HealthyLogo />
        <NavMenu>
          <NavLink to='/market' activeStyle>Market</NavLink>
          <NavLink to='/calculator' activeStyle>Recipe Calculator</NavLink>
          <NavLink to='/farmers' activeStyle>Meet the Farmers</NavLink>
          <NavLink to='/register' activeStyle>Get Started</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </Router>
  )
};

export default Navbar;