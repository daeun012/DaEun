import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Study from "./pages/Study";
import Career from "./pages/Career";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
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
                          <Route exact path="/career" component={Career}></Route>
                          <Route path="/career/:title" component={ProjectDetail}></Route>
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

export default App;
