import AnimateContainer from "../../components/AnimateContainer/AnimateContainer";
import AnimateItem from "../../components/AnimateItem/AnimateItem";
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
				<AnimateContainer>
					<AnimateItem>
						<SectionTitle title="PROJECTS" />
					</AnimateItem>
					<AnimateItem className="content">{renderProjectItems(PROJECTS)}</AnimateItem>
				</AnimateContainer>
			</div>
		</section>
	);
}
