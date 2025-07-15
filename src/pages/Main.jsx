import About from "./about/About";
import "./Main.scss";
import Project from "./project/Project";
import Skills from "./skills/Skills";

export default function Main({ scrollRef }) {
	return (
		<div className="main">
			<About />
			<Skills />
			<Project />
		</div>
	);
}
