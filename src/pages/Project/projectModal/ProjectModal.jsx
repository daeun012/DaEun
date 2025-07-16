import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import { useNavigate, useParams } from "react-router-dom";
import FunBun from "../projectDetail/FunBun";
import Humechanic from "../projectDetail/Humechanic";
import LabelImage from "../projectDetail/LabelImage";
import "./ProjectModal.scss";

const project = [
	{ id: 0, element: <FunBun /> },
	{ id: 1, element: <Humechanic /> },
	{ id: 2, element: <LabelImage /> },
	{ id: 3, element: <FunBun /> },
	{ id: 4, element: <Humechanic /> },
	{ id: 5, element: <LabelImage /> },
];

export default function ProjectModal() {
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				handleModalClose();
			}
		};

		document.addEventListener("keydown", handleEscape);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "auto";
		};
	}, []);

	const handleModalClose = () => {
		navigate(-1);
	};

	return (
		<div className="project-modal" onClick={handleModalClose}>
			<div className="content" onClick={(e) => e.stopPropagation()}>
				{project[id].element}
			</div>
			<button className="close-button">
				<IoClose size="32" />
			</button>
		</div>
	);
}
