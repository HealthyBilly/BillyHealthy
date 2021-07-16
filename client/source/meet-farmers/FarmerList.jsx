import React, { useState, useEffect } from "react";
import Styles from "../SharedComponents.jsx";
import FarmerItem from "./FarmerItem.jsx";
import farmers from "../../../database/db.js";

const FarmerList = (props) => {
  // const farmers = ["1 farmer", "2 farmers", "3 farmers"];

  const mapFarmers = (farmer, index) => (
    <FarmerItem farmer={farmer} key={index} />
  );

  return (
    <>
      <div>{farmers.map(mapFarmers)}</div>
      <div className="farmer-footer">
        <button className="farmer-footer-button">
          <strong>See how we choose our farmers</strong>
        </button>
        <button className="farmer-footer-button">
          <strong>Become a trusted farmer</strong>
        </button>
      </div>
    </>
  );
};

export default FarmerList;
