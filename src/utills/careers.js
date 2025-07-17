import SIAnalytics from "../pages/career/careerDetail/SIAnalytics";

const CAREERS = [
	{
		id: 0,
		src: `${process.env.PUBLIC_URL}/images/sia-logo.svg`,
		title: "SIA / Frontend Developer",
		date: "2021.09.27 ~ 2024.02.19",
		detail: <SIAnalytics />,
	},
];

function getCareerById(id) {
	return CAREERS.find((career) => career.id === id);
}

export { CAREERS, getCareerById };
