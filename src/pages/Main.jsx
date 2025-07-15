import About from "./about/About";
import Career from "./career/Career";
import "./Main.scss";
import Project from "./project/Project";
import Skills from "./skill/Skill";

export default function Main({ scrollRef }) {
	return (
		<div className="main">
			<About scrollRef={scrollRef} />
			<Skills scrollRef={scrollRef} />
			<Project scrollRef={scrollRef} />
			<Career scrollRef={scrollRef} />
		</div>
	);
}
