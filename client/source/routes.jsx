import React from 'react';
import Store from './Store/Store.jsx';
import Checkout from './Checkout/Checkout.jsx';
import Navbar from "./Navigation/Navbar.jsx";
import LandingPage from './LandingPage.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import RecipeCalculator from './RecipeCal/RecipeCalculator.jsx';
import Login from './Login/Login.jsx';

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/market" component={Store} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/calculator" component={RecipeCalculator} />
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
};