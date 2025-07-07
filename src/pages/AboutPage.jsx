import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import './AboutPage.scss';

export default function AboutPage() {
	return (
		<div className="about">
			<PageTitle title="About" />
			<div className="body">
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
				<div className="detail-info">
					<p>이메일 : rla971203@gmail.com</p>
					<p>연락처 : 010-4116-5131</p>
					<p>
						Github :{' '}
						<a href="https://github.com/daeun012" target="blank">
							https://github.com/daeun012
						</a>
					</p>
				</div>
				<div className="skill-group">
					<div className="skill">
						<h3>Frontend</h3>
						<div className="skill-img-wrapper">
							<img src="https://daeun012.github.io/DaEun/images/web.png" alt="html" height="100" width="250" />
							<img src="https://daeun012.github.io/DaEun/images/react.png" alt="react" width="90" />
							<img src="https://daeun012.github.io/DaEun/images/redux.png" alt="redux" width="100" />
							<img src="https://daeun012.github.io/DaEun/images/typescript.png" alt="typescript" width="100" />
							<img src="https://daeun012.github.io/DaEun/images/openlayers.png" alt="openlayers" width="100" />
							<img src="https://daeun012.github.io/DaEun/images/bootstrap.png" alt="bootstrap" width="100" />
							<img
								src="https://daeun012.github.io/DaEun/images/ant-design.png"
								alt="ant-design"
								height="50"
								width="200"
							/>
						</div>
					</div>
					<div className="skill">
						<h3>Backend</h3>
						<div className="skill-img-wrapper">
							<img src="https://daeun012.github.io/DaEun/images/nodejs.png" alt="node.js" height="100" width="100" />
							<img
								src="https://daeun012.github.io/DaEun/images/express.png"
								height="100"
								alt="express.js"
								width="150"
							/>
							<img src="https://daeun012.github.io/DaEun/images/mongodb.png" alt="mongoDB" height="100" width="100" />
							<img src="https://daeun012.github.io/DaEun/images/mysql.png" alt="mysql" height="100" width="100" />
						</div>
					</div>
					<div className="skill">
						<h3>Etc</h3>
						<div className="skill-img-wrapper">
							<img src="https://daeun012.github.io/DaEun/images/git.png" alt="git" height="100" width="100" />
							<img src="https://daeun012.github.io/DaEun/images/github.png" alt="github" height="100" width="100" />
							<img
								src="https://daeun012.github.io/DaEun/images/gitkraken.png"
								alt="gitkraken"
								height="100"
								width="100"
							/>
						</div>
					</div>
					<div className="skill">
						<h3>Certificate</h3>
						<div className="skill-img-wrapper">
							<img
								src="https://daeun012.github.io/DaEun/images/certificate.jpg"
								alt="certificate"
								height="100"
								width="130"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
