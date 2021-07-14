import React from 'react';
import Store from './Store/Store.jsx';
import Navbar from "./Navigation/Navbar.jsx";
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/market" component={Store} />
      </Switch>
    </div>
  );
};