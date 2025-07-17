import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { PROJECTS } from "../../utills/projects";
import "./Project.scss";

export default function Project({ scrollRef, onOpenModal, onProjectIdChange }) {
	const renderProjectItems = (array) => {
		return array.map((value, index) => (
			<Card
				key={index}
				id={value.id}
				imgSrc={value.src}
				title={value.title}
				date={value.date}
				onOpenModal={onOpenModal}
				onProjectIdChange={onProjectIdChange}
			/>
		));
	};

	return (
		<section className="project" ref={(projectRef) => (scrollRef.current[2] = projectRef)}>
			<div className="project-container">
				<SectionTitle title="Projects" />
				<div className="content">{renderProjectItems(PROJECTS)}</div>
			</div>
		</section>
	);
}
