import React, { useState, useEffect, lazy, Suspense } from "react";
import Styles from "../SharedComponents.jsx";
import FarmerList from "./FarmerList.jsx";

const FarmerListComponent = lazy(() => import("./FarmerList.jsx"));
const renderLoader = () => <p>Loading</p>;

const Farmers = (props) => {
  return (
    <Suspense fallback={renderLoader()}>
      <FarmerListComponent />
    </Suspense>
  );
};

export default Farmers;
