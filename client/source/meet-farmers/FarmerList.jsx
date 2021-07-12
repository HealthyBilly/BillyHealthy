import React, { useState, useEffect } from "react";
import Styles from "../SharedComponents.jsx";
import FarmerItem from "./FarmerItem.jsx";

const FarmerList = (props) => {
  const farmers = ["1 farmer", "2 farmers", "3 farmers"];

  const mapFarmers = (farmer) => <FarmerItem farmer={farmer} />;

  return (
    <>
      <h3>farmer list</h3>
      <div>{farmers.map(mapFarmers)}</div>
    </>
  );
};

export default FarmerList;
