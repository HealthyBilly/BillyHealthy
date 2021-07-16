import React, { useState, useEffect } from "react";
import Styles from "./SharedComponents.jsx";
import Farmers from "./meet-farmers/Farmers.jsx";
import Footer from "./Footer.jsx";

const App = (props) => {
  return (
    <>
      <Farmers />
      <Footer />
    </>
  );
};

export default App;
