import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title }) => (
  <div className="container-page-title">
    {title} <div className="bar"></div>
  </div>
);

export default PageTitle;
