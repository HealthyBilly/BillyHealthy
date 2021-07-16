import React, { useState, useEffect } from "react";
import Styles from "../SharedComponents.jsx";

const FarmerItem = (props) => {
  // const SmallButton = Styles.smallButton;
  // return (
  //   <div>
  //     <SmallButton>Small button</SmallButton>
  //     <img src="./assets/pngAvocadoTree.jpeg"></img>
  //   </div>
  // );

  return (
    <>
      <div className="farmer-item">
        <img
          src="https://billyhealthyfood.s3.amazonaws.com/pink-tab.png"
          alt="styled-tab"
          className="styled-tab"
        ></img>
        <div className="farmer-header">
          <div className="logo-container">
            <img
              src={props.farmer.Logo}
              alt={props.farmer.Farmer + " logo"}
              className="farmer-logo"
            ></img>
          </div>
          <p>
            <strong>{props.farmer.Farmer}</strong>
          </p>
          <p>{props.farmer.Location}</p>
        </div>
        <div className="farmer-info">
          <p className="farmer-description">{props.farmer.Description}</p>
          <div className="farmer-links">
            <button className="info-button">Go to website</button>
            <div className="farmer-deal">
              <button className="info-button">{props.farmer.Offer}</button>
              <p>{props.farmer.OfferExpiration}</p>
            </div>
          </div>
        </div>
        <img
          src="https://billyhealthyfood.s3.amazonaws.com/certified-icon.png"
          alt="verified farmer"
          className="certification-icon"
        ></img>
      </div>
    </>
  );
};

export default FarmerItem;
