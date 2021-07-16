import React, { useState, setState } from 'react';
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  HealthyLogo
} from './NavBarElements.js';
import { useCart } from '../Store/cart-modal/Cart.js';
import CartModal from '../Store/cart-modal/CartModal.jsx';

const Navbar = () => {
  const cartItems = useCart();
  const [isModalOpen, setModalIsOpen] = useState(false);
  return (
      <Nav>
        <HealthyLogo />
        <NavMenu>
          <NavLink to='/market'>Market</NavLink>
          <NavLink to='/calculator'>Recipe Calculator</NavLink>
          <NavLink to='/farmers'>Meet the Farmers</NavLink>
          <NavLink to='/register'>Get Started</NavLink>
          <NavLink to='/checkout'>Checkout</NavLink>
          <NavLink
            to='/market'
            onClick={() => setModalIsOpen(true)}
          >
            Cart ({cartItems.length})
          </NavLink>
          <CartModal open={isModalOpen} onClose={() => setModalIsOpen(false)}></CartModal>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  )
};

export default Navbar;