import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { PROJECTS } from "../../utills/projects";
import "./Project.scss";

export default function Project({ scrollRef, onOpenModal, onProjectIdChange }) {
	const handleCardClick = (id) => {
		onProjectIdChange(id);
		onOpenModal();
	};

	const renderProjectItems = (array) => {
		return array.map((value, index) => (
			<Card
				key={index}
				imgSrc={value.src}
				title={value.title}
				date={value.date}
				desc={value.desc}
				onClick={() => handleCardClick(value.id)}
			/>
		));
	};

	return (
		<section className="project" ref={(projectRef) => (scrollRef.current[1] = projectRef)}>
			<div className="project-container">
				<SectionTitle title="PROJECTS" />
				<div className="content">{renderProjectItems(PROJECTS)}</div>
			</div>
		</section>
	);
}
