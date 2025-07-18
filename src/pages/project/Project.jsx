import Card from "../../components/card/Card";
import ScrollAnimate from "../../components/scrollAnimate/ScrollAnimate";
import ScrollAnimateContainer from "../../components/scrollAnimateContainer/ScrollAnimateContainer";
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
				<ScrollAnimateContainer>
					<ScrollAnimate>
						<SectionTitle title="PROJECTS" />
					</ScrollAnimate>
					<ScrollAnimate>
						<div className="content">{renderProjectItems(PROJECTS)}</div>
					</ScrollAnimate>
				</ScrollAnimateContainer>
			</div>
		</section>
	);
}
