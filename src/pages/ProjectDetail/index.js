import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import FunBun from "./FunBun";
import Humechanic from "./Humechanic";
import Portfolio from "./Portfolio";
import LabelImage from "./LabelImage";

const ProjectDetail = () => {
  return (
    <div className="container-detail">
      <Routes>
        <Route path="FunBun" element={<FunBun />} />
        <Route path="Humechanic" element={<Humechanic />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="LabelImage" element={<LabelImage />} />
      </Routes>
    </div>
  );
};

export default ProjectDetail;
