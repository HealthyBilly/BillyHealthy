import React, { useState, useEffect } from "react";
import Styles from "./SharedComponents.jsx";
import Navbar from "./Navigation/Navbar.jsx";
import LandingPage from "./LandingPage.jsx";

import UserProvider from './Login/UserProvider.jsx';

const App = (props) => {
  const SmallButton = Styles.smallButton;

  return (
    <>
    <UserProvider>
      <Navbar />
      <SmallButton>Small button</SmallButton>
      <img src="./assets/pngAvocadoTree.jpeg" />
    </UserProvider>

    </>
  );
};

export default App;
