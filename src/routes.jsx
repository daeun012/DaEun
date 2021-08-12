import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Nav from './component/Nav/Nav';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project/index';
import Study from './routes/Study';
import FunBun from './routes/Project/FunBun';
import Humechanic from './routes/Project/Humechanic';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/project', name: 'Project', Component: Project },
  { path: '/study', name: 'Study', Component: Study },
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
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition in={match != null} timeout={600} classNames="page" unmountOnExit enter={true} exit={true}>
                <div className="page">
                  <div className="layout-container">
                    <div className="main-container">
                      <Component />
                    </div>
                  </div>
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  );
}
