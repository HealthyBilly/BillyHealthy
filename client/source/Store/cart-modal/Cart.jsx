import React from 'react';
import { useCart, useDispatchCart } from './Cart.js';
import {
  GroceryImg,
  AddToCartButton
} from '../grocery-details/GroceryElements.js';

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <article>
      <div>
        <div className="dtc w3">
          <GroceryImg src={product.image} />
        </div>
        <div className="dtc v-top pl2">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">{product.name}</h1>
          <dl className="mt2 f6">
            <dt className="clip">Price</dt>
            <dd className="ml0">
              {product.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}
            </dd>
          </dl>
          <button onClick={() => handleRemove(index)}>Remove from Cart</button>
        </div>
      </div>
    </article>
  )
};

const Cart = () => {
  const itemsInCart = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = itemsInCart.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index })
  }

  if(itemsInCart.length === 0) {
    return (
      <p>Cart is empty</p>
    )
  }
  return (
    <div>
    <p>
      Total price: {" "}
      {totalPrice.toLocaleString("en", {
        style: "currency",
        currency: "USD"
      })}
    </p>
    {itemsInCart.map((item, index) => (
      <CartItem
        key={index}
        product={item}
        index={index}
        handleRemove={handleRemove}
      />
    ))}
   </div>
  );
};

export default Cart;