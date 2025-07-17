import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Project from "./pages/project/Project";
import ProjectModal from "./pages/project/projectModal/ProjectModal";
import Skills from "./pages/skill/Skill";

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [projectId, setProjectId] = useState();
	const scrollRef = useRef([]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleProjectIdChange = (id) => {
		setProjectId(id);
	};

	return (
		<>
			<Header scrollRef={scrollRef} />
			<About scrollRef={scrollRef} />
			<Skills scrollRef={scrollRef} />
			<Project scrollRef={scrollRef} onOpenModal={handleOpenModal} onProjectIdChange={handleProjectIdChange} />
			<Career scrollRef={scrollRef} />
			<CSSTransition in={isModalOpen} timeout={500} classNames="fade" unmountOnExit>
				<ProjectModal onCloseModal={handleCloseModal} projectId={projectId} />
			</CSSTransition>
		</>
	);
}
