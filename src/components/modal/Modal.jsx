import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./Modal.scss";

export default function Modal({ onExit, children }) {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onExit();
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
		<div className="modal" onClick={onExit}>
			<div className="content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
			<button className="close-button">
				<IoClose size="32" />
			</button>
		</div>
	);
}
