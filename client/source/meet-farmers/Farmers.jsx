import React, { useState, useEffect } from "react";
import Styles from "../SharedComponents.jsx";
import FarmerList from "./FarmerList.jsx";

const Farmers = (props) => {
  return (
    <>
      <h1>Meet farmers</h1>
      <FarmerList />
    </>
  );
};

export default Farmers;
