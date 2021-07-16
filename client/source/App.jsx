import React, { useState, useEffect, useContext } from 'react';
import Styles from './SharedComponents.jsx';
import Navbar from './Navigation/Navbar.jsx';
import LandingPage from './LandingPage.jsx';

const App = (props) => {
  const SmallButton = Styles.smallButton;

  return (
    <>
      <Navbar />
      <SmallButton>Small button</SmallButton>
      <img src="./assets/pngAvocadoTree.jpeg" />
    </>
  );
};
export default App;
