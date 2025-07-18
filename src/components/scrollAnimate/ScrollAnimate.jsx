import { motion } from "framer-motion";

export default function ScrollAnimate({ children }) {
	const item = {
		hidden: { opacity: 0, y: 50 },
		show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 1, y: { duration: 1 } } },
	};

	return <motion.div variants={item}>{children}</motion.div>;
}
