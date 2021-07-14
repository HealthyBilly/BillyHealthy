import React, { useState, useEffect } from "react";
import Styles from "./SharedComponents.jsx";
import Navbar from "./Navigation/Navbar.jsx";

const App = (props) => {
  const SmallButton = Styles.smallButton;
  return (
    <>
      <Navbar />
      <SmallButton>Small button</SmallButton>
      <img src="./assets/pngAvocadoTree.jpeg"></img>
    </>
  );
};
export default App;
