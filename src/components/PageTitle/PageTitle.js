import React from "react";
import "./PageTitle.scss";

const PageTitle = ({ title }) => (
  <div className="page-title">
    {title} <div className="bar" />
  </div>
);

export default PageTitle;
