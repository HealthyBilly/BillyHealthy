import React, { useState, useEffect } from "react";
import Styles from "./SharedComponents.jsx";

const App = (props) => {
  const SmallButton = Styles.smallButton;
  return (
    <div>
      <SmallButton>Small button</SmallButton>
      <img src="./assets/pngAvocadoTree.jpeg"></img>
    </div>
  );
};
export default App;
