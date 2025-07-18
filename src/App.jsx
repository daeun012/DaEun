import { useMemo, useRef, useState } from "react";

import { getCareerById } from "utills/careers";
import { getProjectById } from "utills/projects";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Project from "./pages/project/Project";

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
			<Project scrollRef={scrollRef} onOpenModal={handleProjectModalOpen} onProjectIdChange={handleProjectIdChange} />
			<Career scrollRef={scrollRef} onOpenModal={handleCareerModalOpen} onProjectIdChange={handleCareerIdChange} />

			<footer>© 2025. All rights reserved.</footer>

			<Modal isOpen={isProjectModalOpen} onExit={handleProjectModalClose}>
				{project?.detail}
			</Modal>
			<Modal isOpen={isCareerModalOpen} onExit={handleCareerModalClose}>
				{career?.detail}
			</Modal>
		</>
	);
}
