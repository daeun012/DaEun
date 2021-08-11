import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ButtonNavLink from '../ButtonNavLink/ButtonNavLink';
import MenuIcon from '../MenuIcon/MenuIcon';
import './Nav.scss';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="items left-side">
          <NavLink className="logo-wrapper" to="/">
            DAEUN
          </NavLink>
        </div>
        <div className="items right-side">
          <MenuIcon open={open} toggleMenu={() => setOpen(!open)} />
          <div className="menu">
            <NavLink className="menu-item" to="/about" activeClassName="selected">
              About _
            </NavLink>
            <NavLink className="menu-item" to="/project" activeClassName="selected">
              Project _
            </NavLink>
            <NavLink className="menu-item" to="/project" activeClassName="selected">
              Study _
            </NavLink>
            <a className="menu-item" target="_blank" href="https://daeun012.github.io/" rel="noreferrer">
              Blog _
            </a>
          </div>

          <CSSTransition classNames="mobile-menu" in={open} timeout={300} unmountOnExit>
            <div className="mobile-menu" onClick={() => setOpen(!open)}>
              <div className="buttonNav">
                <ButtonNavLink name="About" />
                <ButtonNavLink name="Project" />
                <ButtonNavLink name="Study" />
                <ButtonNavLink name="Blog" />
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Nav;
