import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import "./AboutPage.scss";

const skills = {
	design: ["Figma"],
	graphic: ["Adobe Photoshop", "Adobe Illustrator"],
	publish: ["HTML5", "CSS3", "javascript"],
	communication: ["Slack", "Github", "Monday", "Zeplin"],
	etc: ["React", "Typescript", "Material UI", "Ant Design", "Bootstrap", "Storybook", "Node.js", "MySQL", "MongoDB"],
};

export default function AboutPage() {
	const renderSkillItems = (array) => {
		return array.map((value, index) => (
			<div className="skill-item" key={index}>
				{value}
			</div>
		));
	};

	return (
		<section className="about">
			<PageTitle title="About" />
			<div className="body">
				<div className="introduce">
					<h2 className="name">DaEun Kim • 김다은</h2>
					<p>
						<b>왜?라는 질문을 좋아합니다.</b> 모든 것에는 이유가 있다고 생각합니다. 그 이유를 이해하고 그 근거를
						학습하고자 합니다.
					</p>
					<p>
						직관적이고 매력적인 화면을 구현하는 것에 관심을 갖고 있습니다. 또한 팀원들과의 협업을 중시하며, 항상 요구에
						부응하는 최선의 솔루션을 찾고자 합니다.
					</p>
					<p>
						<b>사용자 경험을 개선하고, 혁신적인 디자인과 기술을 통해 사용자들에게 가치를 제공하고 싶습니다.</b>
					</p>
				</div>
				<div className="personal-info">
					<div>rla971203@gmail.com</div>
					<div> | </div>
					<div>
						<a href="https://github.com/daeun012" target="blank">
							Github
						</a>
					</div>
				</div>
				<hr />
				<h2 className="name">🚀 기술 스택</h2>
				<div className="skill-wrapper">
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
