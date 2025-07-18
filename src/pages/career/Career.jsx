import Card from "../../components/card/Card";
import ScrollAnimate from "../../components/scrollAnimate/ScrollAnimate";
import ScrollAnimateContainer from "../../components/scrollAnimateContainer/ScrollAnimateContainer";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { CAREERS } from "../../utills/careers";
import "./Career.scss";

export default function Career({ scrollRef, onOpenModal, onProjectIdChange }) {
	const handleCardClick = (id) => {
		onProjectIdChange(id);
		onOpenModal();
	};

	const renderCareerItems = (array) => {
		return array.map((value, index) => (
			<Card
				key={index}
				imgSrc={value.src}
				title={value.title}
				date={value.date}
				onClick={() => handleCardClick(value.id)}
			/>
		));
	};

	return (
		<section className="career" ref={(careerRef) => (scrollRef.current[2] = careerRef)}>
			<div className="career-container">
				<ScrollAnimateContainer>
					<ScrollAnimate>
						<SectionTitle title="CAREER" />
					</ScrollAnimate>
					<ScrollAnimate>
						<div className="conent">{renderCareerItems(CAREERS)}</div>
					</ScrollAnimate>
				</ScrollAnimateContainer>
			</div>
		</section>
	);
}
