const { default: CatchTable } = require("../pages/project/projectDetail/CatchTable");
const { default: Delivery } = require("../pages/project/projectDetail/Delivery");
const { default: FunBun } = require("../pages/project/projectDetail/FunBun");
const { default: Humechanic } = require("../pages/project/projectDetail/Humechanic");
const { default: Karb } = require("../pages/project/projectDetail/Karb");
const { default: LabelImage } = require("../pages/project/projectDetail/LabelImage");

const PROJECTS = [
	{
		id: 0,
		src: `${process.env.PUBLIC_URL}/images/karb_cover.png`,
		title: "인공지능 기반 광고 심의 시스템",
		date: "2025.03 ~ 2025.06 (3UXUI, 2PM)",
		detail: <Karb />,
	},
	{
		id: 1,
		src: `${process.env.PUBLIC_URL}/images/catchtable_cover.png`,
		title: "캐치테이블 탐색 경험 개선",
		date: "2024.09 ~ 2024.11 (3UXUI)",
		detail: <CatchTable />,
	},
	{
		id: 2,
		src: `${process.env.PUBLIC_URL}/images/delivery_cover.png`,
		title: "배달의 민족 리뷰 시스템 개선",
		date: "2024.05 ~ 2024.07 (3UXUI, 5PM)",
		detail: <Delivery />,
	},
	{
		id: 3,
		src: `${process.env.PUBLIC_URL}/images/labeltool_cover.png`,
		title: "이미지 라벨링 툴",
		date: "2021.08 (개인 프로젝트)",
		detail: <LabelImage />,
	},
	{
		id: 4,
		src: `${process.env.PUBLIC_URL}/images/funbun_cover.png`,
		title: "대학생들을 위한 선후배 매칭 및 그룹 채팅 서비스",
		date: "2021.06 ~ 2021.08 (4인 팀 프로젝트)",
		detail: <FunBun />,
	},
	{
		id: 5,
		src: `${process.env.PUBLIC_URL}/images/humechanic_cover.png`,
		title: "로봇 동아리 홈페이지",
		date: "2021.04 ~ 2021.05 (개인 프로젝트)",
		detail: <Humechanic />,
	},
];

function getProjectById(id) {
	return PROJECTS.find((project) => project.id === id);
}

export { getProjectById, PROJECTS };
