import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./Skill.scss";

const skills = {
	design: [{ name: "Figma", color: "#FF3737" }],
	graphic: [
		{ name: "Adobe Photoshop", color: "#30A8FF" },
		{ name: "Adobe Illustrator", color: "#FF7A00" },
	],
	publish: [
		{ name: "HTML5", color: "#F35825" },
		{ name: "CSS3", color: "#007BC9" },
		{ name: "Javascript", color: "#F78224" },
	],
	communication: [
		{ name: "Slack", color: "#4B154B" },
		{ name: "Github", color: "#000000" },
		{ name: "Zeplin", color: "#FDC82E" },
	],
	etc: [
		{ name: "React", color: "#00D7FF" },
		{ name: "Typescript", color: "#3178C6" },
		{ name: "Material UI", color: "#007FFF" },
		{ name: "Ant Design", color: "#1284FF" },
		{ name: "Bootstrap", color: "#8312FA" },
		{ name: "Storybook", color: "#FF4785" },
		{ name: "Node.js", color: "#80BD01" },
		{ name: "MySQL", color: "#015F8B" },
	],
};

export default function Skills({ scrollRef }) {
	const renderSkillItems = (array) => {
		return array.map((value, index) => (
			<div className="skill-item" key={index} style={{ borderColor: value.color }}>
				{value.name}
			</div>
		));
	};

	return (
		<section className="skill" ref={(skillRef) => (scrollRef.current[1] = skillRef)}>
			<div className="skill-container">
				<SectionTitle title="Skills" />

				<div className="skill-box">
					<div className="skill-sets">
						<div className="skill-title">
							<span className="icon">🎨</span>디자인 및 프로토타이핑
						</div>
						<div className="skill-item-group">{renderSkillItems(skills.design)}</div>
					</div>
					<div className="skill-sets">
						<div className="skill-title">
							<span className="icon">🧑🏻‍🎨</span>그래픽 디자인
						</div>
						<div className="skill-item-group">{renderSkillItems(skills.graphic)}</div>
					</div>
					<div className="skill-sets">
						<div className="skill-title">
							<span className="icon">🖥️</span>웹 퍼블리싱 기초
						</div>
						<div className="skill-item-group">{renderSkillItems(skills.publish)}</div>
					</div>
					<div className="skill-sets">
						<div className="skill-title">
							<span className="icon">🗣️</span>협업 및 피드백
						</div>
						<div className="skill-item-group">{renderSkillItems(skills.communication)}</div>
					</div>
					<div className="skill-sets">
						<div className="skill-title">
							<span className="icon">🚀</span>기타
						</div>
						<div className="skill-item-group">{renderSkillItems(skills.etc)}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
