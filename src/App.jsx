import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="frame" />
      <TransitionGroup className="fixed-container">
        <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
          <div className="page">
            <div className="layout-container">
              <div className="main-container">
                <ScrollToTop>
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="project" element={<Project />} />
                    <Route path="project/*" element={<ProjectDetail />} />
                    <Route path="career" element={<Career />} />
                    <Route path="career/*" element={<ProjectDetail />} />
                    <Route path="study" element={<Study />} />
                  </Routes>
                </ScrollToTop>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
