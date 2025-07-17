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
		desc: "광고 심의를 담당하는 한국광고자율심의기구 실무자들의 원활한 업무 수행을 지원하는 서비스",
		detail: <Karb />,
	},
	{
		id: 1,
		src: `${process.env.PUBLIC_URL}/images/catchtable_cover.png`,
		title: "캐치테이블 탐색 경험 개선",
		date: "2024.09 ~ 2024.11 (3UXUI)",
		desc: "사용자 유입과 재방문율을 높여 미식 플랫폼으로서의 경쟁력 강화를 위한 탐색 경험 개선",
		detail: <CatchTable />,
	},
	{
		id: 2,
		src: `${process.env.PUBLIC_URL}/images/delivery_cover.png`,
		title: "배달의 민족 리뷰 시스템 개선",
		desc: "고객의 탐색 편의성 향상과 플랫폼의 신뢰도 강화를 위한 리뷰 시스템 개선",
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
