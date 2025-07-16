import { Link, useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./Project.scss";

const projects = [
	{
		img: "https://daeun012.github.io/DaEun/images/humechanic.jpg",
		title: "인공지능 기반 광고 심의 서비스",
		subTitle: "html, css, javascript",
	},
	{
		img: "https://daeun012.github.io/DaEun/images/humechanic.jpg",
		title: "캐치테이블 탐색 경험 개선",
		subTitle: "html, css, javascript",
	},
	{
		img: "https://daeun012.github.io/DaEun/images/humechanic.jpg",
		title: "배달의 민족 리뷰 시스템 개선",
		subTitle: "html, css, javascript",
	},
	{ img: "https://daeun012.github.io/DaEun/images/labelimage.png", title: "이미지 라벨 툴", subTitle: "react" },
	{
		img: "https://daeun012.github.io/DaEun/images/funbun.png",
		title: "대학생들을 위한 선후배 매칭 및 그룹 채팅 서비스",
		subTitle: "react, nodejs, mongo DB, material UI, JSON web tokens",
	},
	{
		img: "https://daeun012.github.io/DaEun/images/humechanic.jpg",
		title: "로봇 동아리 홈페이지",
		subTitle: "html, css, javascript",
	},
];

export default function Project({ scrollRef }) {
	const location = useLocation();

	const renderProjectItems = (array) => {
		return array.map((value, index) => (
			<Link key={index} to={`/project/${index}`} state={{ background: location }} style={{ display: "contents" }}>
				<Card img={value.img} title={value.title} subTitle={value.subTitle} component={Link} to={"/project"} />
			</Link>
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
