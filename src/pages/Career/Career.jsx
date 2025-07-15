import { useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./Career.scss";

export default function Career({ scrollRef }) {
	const { pathname } = useLocation();

	return (
		<section className="career-container" ref={(careerRef) => (scrollRef.current[3] = careerRef)}>
			<SectionTitle title="Career" />
			<div className="conent">
				<Card
					img="https://daeun012.github.io/DaEun/images/sia-logo.svg"
					title="SIA"
					subTitle="Frontend Developer"
					desc="2021.09.27 ~ 2024.02.19"
					match={`${pathname}/SIAnalytics`}
				/>
			</div>
		</section>
	);
}
