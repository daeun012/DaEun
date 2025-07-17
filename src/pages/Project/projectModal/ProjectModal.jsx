import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import CatchTable from "../projectDetail/CatchTable";
import Delivery from "../projectDetail/Delivery";
import FunBun from "../projectDetail/FunBun";
import Humechanic from "../projectDetail/Humechanic";
import Karb from "../projectDetail/Karb";
import LabelImage from "../projectDetail/LabelImage";
import "./ProjectModal.scss";

const project = [
	{ id: 0, element: <Karb /> },
	{ id: 1, element: <CatchTable /> },
	{ id: 2, element: <Delivery /> },
	{ id: 3, element: <LabelImage /> },
	{ id: 4, element: <FunBun /> },
	{ id: 5, element: <Humechanic /> },
];

export default function ProjectModal({ onCloseModal, projectId }) {
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
				{project[projectId].element}
			</div>
			<button className="close-button">
				<IoClose size="32" />
			</button>
		</div>
	);
}
