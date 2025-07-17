import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import { getProjectById } from "../../../utills/projects";
import "./ProjectModal.scss";

export default function ProjectModal({ onCloseModal, projectId }) {
	const project = getProjectById(projectId);

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onCloseModal();
			}
		};

		document.addEventListener("keydown", handleEscape);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div className="project-modal" onClick={onCloseModal}>
			<div className="content" onClick={(e) => e.stopPropagation()}>
				{project.detail}
			</div>
			<button className="close-button">
				<IoClose size="32" />
			</button>
		</div>
	);
}
