import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Header from "./components/header/Header";
import About from "./pages/About";
import Career from "./pages/career/Career";
import CareerDetail from "./pages/career/careerDetail";
import Home from "./pages/Home";
import Project from "./pages/project/Project";
import ProjectDetail from "./pages/project/projectDetail";

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
