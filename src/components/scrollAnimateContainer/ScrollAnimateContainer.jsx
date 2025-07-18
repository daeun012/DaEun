import { motion } from "framer-motion";

export default function ScrollAnimateContainer({ children }) {
	const container = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.5,
				ease: "easeInOut",
				duration: 1,
				y: { duration: 1 },
			},
		},
	};

	return (
		<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
			{children}
		</motion.div>
	);
}
