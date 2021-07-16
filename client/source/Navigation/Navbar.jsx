import React, { useState, setState } from 'react';
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  HealthyLogo,
  CartIconBox,
  CartCountCircle,
  CartImgStyle
} from './NavBarElements.js';
import { useCart } from '../Store/cart-modal/Cart.js';
import CartModal from '../Store/cart-modal/CartModal.jsx';
import CartImg from '../Store/grocery-details/shoppingCartIconTeal.png';

const Navbar = () => {
  const cartItems = useCart();
  const [isModalOpen, setModalIsOpen] = useState(false);
  return (
      <Nav>
        <NavLink to='/home'><HealthyLogo /></NavLink>
        <NavMenu>
          {/* <NavLink to='/register'>Get Started</NavLink> */}
          <NavLink to='/market'>Market</NavLink>
          <NavLink to='/calculator'>Recipe Calculator</NavLink>
          <NavLink to='/farmers'>Meet the Farmers</NavLink>
          <NavLink to='/checkout'>Checkout</NavLink>
          <NavLink
            to='/market'
            onClick={() => setModalIsOpen(true)}
          >
            <CartImgStyle src={CartImg}></CartImgStyle>
            <CartCountCircle>{cartItems.length}</CartCountCircle>
          </NavLink>
          <CartModal open={isModalOpen} onClose={() => setModalIsOpen(false)}></CartModal>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
  )
};

export default Navbar;