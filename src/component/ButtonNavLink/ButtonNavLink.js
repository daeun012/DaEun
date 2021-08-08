import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonNavLink.scss';

const ButtonNavLink = ({ name }) =>
  name === 'Blog' ? (
    <a target="_blank" className="ButtonNavLink" href="https://daeun012.github.io/" rel="noreferrer">
      <div className="title">
        {name} <div className="bar" />
      </div>
      <div className="wrapper-arrow">
        <img src="/images/link_arrow.svg" alt={name} />
      </div>
    </a>
  ) : (
    <Link className="ButtonNavLink" activeclassname="selected" to={`/${name.toLowerCase()}`}>
      <div className="title">
        {name} <div className="bar" />
      </div>
      <div className="wrapper-arrow">
        <img src="/images/link_arrow.svg" alt={name} />
      </div>
    </Link>
  );

export default ButtonNavLink;
