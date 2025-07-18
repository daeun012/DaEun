import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./About.scss";

const skills = {
	design: [
		{ name: "Figma", color: "#FF3737" },
		{ name: "Photoshop", color: "#30A8FF" },
		{ name: "Illustrator", color: "#FF7A00" },
	],

	publish: [
		{ name: "HTML5", color: "#F35825" },
		{ name: "CSS3", color: "#007BC9" },
		{ name: "Javascript", color: "#F78224" },
	],

	etc: [
		{ name: "React", color: "#767f85" },
		{ name: "Typescript", color: "#767f85" },
		{ name: "Material UI", color: "#767f85" },
		{ name: "Ant Design", color: "#767f85" },
		{ name: "Bootstrap", color: "#767f85" },
		{ name: "Storybook", color: "#767f85" },
		{ name: "Node.js", color: "#767f85" },
		{ name: "MySQL", color: "#767f85" },
	],
};

export default function About({ scrollRef }) {
	const renderSkillItems = (array) => {
		return array.map((value, index) => (
			<div className="skill-item" key={index} style={{ borderColor: value.color }}>
				{value.name}
			</div>
		));
	};

	return (
		<section className="about" ref={(careerRef) => (scrollRef.current[0] = careerRef)}>
			<div className="about-container">
				<SectionTitle title="UXUI PORTFOLIO" />
				<div className="content">
					<p>복잡한 요구사항 속에서도 핵심을 놓치지 않는 디자인을 합니다.</p>
					<p>수많은 선택지 앞에서도 본질을 꿰뚫어 필요한 것에 집중하고,</p>
					<p>나머지를 과감히 포기하는 용기를 통해 최적의 해결책을 제시합니다.</p>
					<br />
					<br />
					<div className="info">
						<div>rla971203@gmail.com</div>
						<div> | </div>
						<a href="https://github.com/daeun012" target="blank">
							Github
						</a>
					</div>
					<div className="box-container">
						<div className="box-wrapper">
							<h4>🔖 CAREER</h4>
							<div className="about-detail">
								<h5>SI Analytics / 프론트엔드 개발자</h5>
								<span> 2021.09 ~ 2024.02</span>
								<ul className="summary">
									<li>디자인 시스템 구축</li>
									<li>위성 데이터를 활용한 AI 기반 위성/항공 영상 분석 서비스 개발</li>
									<li>요구사항에 맞는 사용성 개선과 기능으리 플로우 제안 및 기술 검증</li>
								</ul>
							</div>
						</div>
						<div className="box-wrapper">
							<h4>👩🏻‍🎓 EXPERIENCE & CERTIFICATE</h4>
							<div className="about-detail">
								<h5>UXUI디자인 부트캠프 3기</h5>
								<span>2024.03 ~ 2024.09</span>
							</div>
							<div className="about-detail">
								<h5>정보처리기사</h5>
								<span>2021.06.02</span>
							</div>
						</div>
						<div className="box-wrapper">
							<h4>🚀 USED TOOL & SKILLS</h4>
							<div className="skill-detail">
								<div className="skill-group">{renderSkillItems(skills.design)}</div>
								<div className="skill-group">{renderSkillItems(skills.publish)}</div>
							</div>
							<div className="skill-detail">
								<span>SUB SKILL</span>
								<div className="skill-group">{renderSkillItems(skills.etc)}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
