import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonNavLink.scss';

const ButtonNavLink = ({ name }) => (
  <div className="buttonNavLink">
    {name === 'Blog' ? (
      <a className="link-wrapper" target="_blank" href="https://daeun012.github.io/" rel="noreferrer">
        <div className="title">
          {name} <div className="bar" />
        </div>
        <div className="wrapper-arrow">
          <img src="/images/link_arrow.svg" alt={name} />
        </div>{' '}
      </a>
    ) : (
      <Link className="link-wrapper" activeclassname="selected" to={`/${name.toLowerCase()}`}>
        <div className="title">
          {name} <div className="bar" />
        </div>
        <div className="arrow-wrapper">
          <img src="/images/link_arrow.svg" alt={name} />
        </div>
      </Link>
    )}
  </div>
);

export default ButtonNavLink;
