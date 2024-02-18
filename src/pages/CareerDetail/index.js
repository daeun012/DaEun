import React from "react";
import { Route, Routes } from "react-router-dom";
import SIAnalytics from "./SIAnalytics";

const CareerDetail = () => {
  return (
    <div className="container-detail">
      <Routes>
        <Route path="SIAnalytics" element={<SIAnalytics />} />
      </Routes>
    </div>
  );
};

export default CareerDetail;
