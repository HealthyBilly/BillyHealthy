import React from 'react';
import { useCart, useDispatchCart } from './Cart.js';
import {
  GroceryImg,
  AddToCartButton
} from '../grocery-details/GroceryElements.js';
import {
  ModalContainer,
  CartOuterBox,
  CartInformationBox,
  CartImageBox,
  CheckoutButton,
  Remove,
  CloseIconStyle
} from './CartElements.js';
import ReactDOM from 'react-dom';
import CloseIcon from './closeTealIcon.svg';

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <CartOuterBox>
        <CartImageBox src={product.image} />
        <CartInformationBox>
        <div style={{"fontSize": 15, "fontWeight": 600}}>{product.name}</div>
        <div>Price&nbsp;
            {product.price.toLocaleString("en", {
              style: "currency",
              currency: "USD"
            })}
          </div>
         <div>Qty: 1</div>
        <Remove onClick={() => handleRemove(index)}>Remove</Remove>
        </CartInformationBox>
    </CartOuterBox>
  )
};

const CartModal = ({ open, children, onClose }) => {
  const itemsInCart = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = itemsInCart.reduce((total, b) => total + b.price, 0);

  if (!open) return null;

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index })
  }

  if(itemsInCart.length === 0) {
    return ReactDOM.createPortal(
      <ModalContainer>
        <CloseIconStyle src={CloseIcon} onClick={onClose}/>
        <p>Your cart is empty!</p>
      </ModalContainer>,
      document.getElementById('portal')
    )
  }
  return ReactDOM.createPortal (
    <ModalContainer>
      <CloseIconStyle src={CloseIcon} onClick={onClose}/>
      {itemsInCart.map((item, index) => (
        <CartItem
          key={index}
          product={item}
          index={index}
          handleRemove={handleRemove}
        />
      ))}
      <p style={{textAlign: "left", "fontSize": 15, "fontWeight": 600}}>
        Estimated Total {" "}
        <span style={{float:"right"}}>{totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD"
        })}
        </span>
      </p>
      <div>Delivery and taxes calculated at checkout.</div>
     <CheckoutButton>Checkout</CheckoutButton>
   </ModalContainer>,
   document.getElementById('portal')
  );
};

export default CartModal;