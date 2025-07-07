import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Project from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";
import Career from "./pages/CareerPage";
import CareerDetail from "./pages/CareerDetail";

const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>;
};

export default function App() {
	const location = useLocation();

	return (
		<>
			<Header />
			<div className="frame" />
			<SwitchTransition className="fixed-container">
				<CSSTransition key={location.pathname} classNames="fade" timeout={500} unmountOnExit>
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
										<Route path="career/*" element={<CareerDetail />} />
									</Routes>
								</ScrollToTop>
							</div>
						</div>
					</div>
				</CSSTransition>
			</SwitchTransition>
		</>
	);
}
