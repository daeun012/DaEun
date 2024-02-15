import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Nav from "./component/Nav/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import ProjectDetail from "./routes/ProjectDetail";
import Study from "./routes/Study";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const MainRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <div className="frame" />
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup className="fixed-container">
              <CSSTransition key={location.key} classNames="fade" timeout={600} unmountOnExit>
                <div className="page">
                  <div className="layout-container">
                    <div className="main-container">
                      <ScrollToTop>
                        <Switch location={location}>
                          <Route exact path="/" component={Home}></Route>
                          <Route path="/about" component={About}></Route>
                          <Route exact path="/project" component={Project}></Route>
                          <Route path="/project/:title" component={ProjectDetail}></Route>
                          <Route path="/study" component={Study}></Route>
                        </Switch>
                      </ScrollToTop>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </Router>
  );
};

export default MainRouter;
