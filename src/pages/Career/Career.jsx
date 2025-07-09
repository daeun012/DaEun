import { useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import PageTitle from "../../components/pageTitle/PageTitle";
import "./Career.scss";

export default function Career() {
	const { pathname } = useLocation();

	return (
		<div className="responsive-container">
			<PageTitle title="Career" />
			<div className="card-list">
				<Card
					img="https://daeun012.github.io/DaEun/images/sia-logo.svg"
					title="SIA"
					subTitle="Frontend Developer"
					desc="2021.09.27 ~ 2024.02.19"
					match={`${pathname}/SIAnalytics`}
				/>
			</div>
		</div>
	);
}
