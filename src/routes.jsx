import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Nav from './component/Nav/Nav';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project/index';
import FunBun from './routes/Project/FunBun';
import Humechanic from './routes/Project/Humechanic';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/project', name: 'Project', Component: Project },
  { path: '/project/FunBun', name: 'FunBun', Component: FunBun },
  { path: '/project/Humechanic', name: 'Humechanic', Component: Humechanic },
];

export default function MainRouter(props) {
  console.log(props.match);
  return (
    <Router>
      <Nav />
      <div className="frame" />
      <div className="fixed-container">
        <div className="layout-container">
          <div className="main-container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit enter={true} exit={true}>
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}
