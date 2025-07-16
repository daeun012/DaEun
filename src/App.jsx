import { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import ProjectModal from "./pages/project/projectModal/ProjectModal";

export default function App() {
	const location = useLocation();
	const background = location.state && location.state.background;
	const scrollRef = useRef([]);

	return (
		<>
			<Header scrollRef={scrollRef} />
			<Routes location={background || location}>
				<Route path="/" element={<Main scrollRef={scrollRef} />} />{" "}
			</Routes>

			<CSSTransition in={!!background} timeout={500} classNames="fade" unmountOnExit>
				<Routes>
					<Route path="project/:id" element={<ProjectModal />} />
				</Routes>
			</CSSTransition>
		</>
	);
}
