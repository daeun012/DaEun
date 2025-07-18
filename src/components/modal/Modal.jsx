import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./Modal.scss";

export default function Modal({ isOpen, onExit, children }) {
	useEffect(() => {
		if (!isOpen) return;

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
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="modal"
					onClick={onExit}
				>
					<div className="content" onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
					<button className="close-button">
						<IoClose size="32" />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
