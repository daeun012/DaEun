import { useMemo, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";
import { getCareerById } from "utills/careers";
import { getProjectById } from "utills/projects";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Project from "./pages/project/Project";
import Skills from "./pages/skill/Skill";

export default function App() {
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
	const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
	const [projectId, setProjectId] = useState();
	const [careerId, setCareerId] = useState();
	const scrollRef = useRef([]);
	const project = useMemo(() => getProjectById(projectId), [projectId]);
	const career = useMemo(() => getCareerById(careerId), [careerId]);

	const handleProjectModalOpen = () => {
		setIsProjectModalOpen(true);
	};

	const handleProjectModalClose = () => {
		setIsProjectModalOpen(false);
	};

	const handleProjectIdChange = (id) => {
		setProjectId(id);
	};

	const handleCareerModalOpen = () => {
		setIsCareerModalOpen(true);
	};

	const handleCareerModalClose = () => {
		setIsCareerModalOpen(false);
	};

	const handleCareerIdChange = (id) => {
		setCareerId(id);
	};

	return (
		<>
			<Header scrollRef={scrollRef} />
			<About scrollRef={scrollRef} />
			<Skills scrollRef={scrollRef} />
			<Project scrollRef={scrollRef} onOpenModal={handleProjectModalOpen} onProjectIdChange={handleProjectIdChange} />
			<Career scrollRef={scrollRef} onOpenModal={handleCareerModalOpen} onProjectIdChange={handleCareerIdChange} />

			<CSSTransition in={isProjectModalOpen} timeout={500} classNames="fade" unmountOnExit>
				<Modal onExit={handleProjectModalClose}>{project?.detail}</Modal>
			</CSSTransition>
			<CSSTransition in={isCareerModalOpen} timeout={500} classNames="fade" unmountOnExit>
				<Modal onExit={handleCareerModalClose}>{career?.detail}</Modal>
			</CSSTransition>
		</>
	);
}
