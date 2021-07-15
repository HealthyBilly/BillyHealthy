import React, { setState } from 'react';
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  HealthyLogo
} from './NavBarElements.js';

const Navbar = () => {
  return (
      <Nav>
        <HealthyLogo />
        <NavMenu>
          <NavLink to='/market'>Market</NavLink>
          <NavLink to='/calculator'>Recipe Calculator</NavLink>
          <NavLink to='/farmers'>Meet the Farmers</NavLink>
          <NavLink to='/register'>Get Started</NavLink>
          <NavLink to='/checkout'>Checkout</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  )
};

export default Navbar;