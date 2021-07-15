import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes.jsx';
import { CartProvider } from './Store/cart-modal/Cart.js';

ReactDOM.render(
<CartProvider>
  <Router>
    <Routes />
  </Router>
</CartProvider>, document.getElementById("app"));
