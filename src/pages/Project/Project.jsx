import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./Project.scss";

const projects = [
	{
		id: 0,
		src: `${process.env.PUBLIC_URL}/images/karb_cover.png`,
		title: "인공지능 기반 광고 심의 시스템",
		date: "2025.03 ~ 2025.06 (3UXUI, 2PM)",
	},
	{
		id: 1,
		src: `${process.env.PUBLIC_URL}/images/catchtable_cover.png`,
		title: "캐치테이블 탐색 경험 개선",
		date: "2024.09 ~ 2024.11 (3UXUI)",
	},
	{
		id: 2,
		src: `${process.env.PUBLIC_URL}/images/delivery_cover.png`,
		title: "배달의 민족 리뷰 시스템 개선",
		date: "2024.05 ~ 2024.07 (3UXUI, 5PM)",
	},
	{
		id: 3,
		src: `${process.env.PUBLIC_URL}/images/labeltool_cover.png`,
		title: "이미지 라벨링 툴",
		date: "2021.08 (개인 프로젝트)",
	},
	{
		id: 4,
		src: `${process.env.PUBLIC_URL}/images/funbun_cover.png`,
		title: "대학생들을 위한 선후배 매칭 및 그룹 채팅 서비스",
		date: "2021.06 ~ 2021.08 (4인 팀 프로젝트)",
	},
	{
		id: 5,
		src: `${process.env.PUBLIC_URL}/images/humechanic_cover.png`,
		title: "로봇 동아리 홈페이지",
		date: "2021.04 ~ 2021.05 (개인 프로젝트)",
	},
];

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
				<div className="content">{renderProjectItems(projects)}</div>
			</div>
		</section>
	);
}
