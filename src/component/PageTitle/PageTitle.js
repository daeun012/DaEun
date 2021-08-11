import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title }) => (
  <div className="pageTitle-container">
    {title} <div className="bar"></div>
  </div>
);

export default PageTitle;
