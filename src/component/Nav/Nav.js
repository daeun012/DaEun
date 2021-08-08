import React from 'react';
import MenuIcon from '../MenuIcon/MenuIcon';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <div className="container-nav">
      <div className="wrapper">
        <div className="items left-side">
          <NavLink className="logo-wrapper" to="/">
            DAEUN
          </NavLink>
        </div>
        <div className="items right-side">
          <MenuIcon />
          <div className="menu">
            <NavLink className="menu-item" to="/about" activeClassName="selected">
              About _
            </NavLink>
            <NavLink className="menu-item" to="/project" activeClassName="selected">
              Project _
            </NavLink>
            <a className="menu-item" target="_blank" href="https://daeun012.github.io/" rel="noreferrer">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
