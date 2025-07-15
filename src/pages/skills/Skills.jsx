import PageTitle from "../../components/pageTitle/PageTitle";
import "./Skills.scss";

const skills = {
	design: ["Figma"],
	graphic: ["Adobe Photoshop", "Adobe Illustrator"],
	publish: ["HTML5", "CSS3", "javascript"],
	communication: ["Slack", "Github", "Monday", "Zeplin"],
	etc: ["React", "Typescript", "Material UI", "Ant Design", "Bootstrap", "Storybook", "Node.js", "MySQL", "MongoDB"],
};

export default function Skills() {
	const renderSkillItems = (array) => {
		return array.map((value, index) => (
			<div className="skill-item" key={index}>
				{value}
			</div>
		));
	};

	return (
		<section className="skills">
			<div className="skills-container">
				<PageTitle title="Skills" />

				<div className="skill-box">
					<div className="skill">
						<div className="skill-title">디자인 및 프로토타이핑 도구</div>
						<div className="skill-item-group">{renderSkillItems(skills.design)}</div>
					</div>
					<div className="skill">
						<div className="skill-title">그래픽 디자인 도구</div>

						<div className="skill-item-group">{renderSkillItems(skills.graphic)}</div>
					</div>
					<div className="skill">
						<div className="skill-title">웹 퍼블리싱 기초 도구</div>
						<div className="skill-item-group">
							<div className="skill-item-group">{renderSkillItems(skills.publish)}</div>
						</div>
					</div>
					<div className="skill">
						<div className="skill-title">협업 및 피드백 도구</div>
						<div className="skill-item-group">{renderSkillItems(skills.communication)}</div>
					</div>
					<div className="skill">
						<div className="skill-title">기타</div>
						<div className="skill-item-group">{renderSkillItems(skills.etc)}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
