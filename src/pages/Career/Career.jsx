import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./Career.scss";

export default function Career({ scrollRef }) {
	return (
		<section className="career" ref={(careerRef) => (scrollRef.current[3] = careerRef)}>
			<div className="career-container">
				<SectionTitle title="Career" />
				<div className="conent">
					<Card
						imgSrc="https://daeun012.github.io/DaEun/images/sia-logo.svg"
						title="SIA"
						subTitle="Frontend Developer"
						date="2021.09.27 ~ 2024.02.19"
					/>
				</div>
			</div>
		</section>
	);
}
