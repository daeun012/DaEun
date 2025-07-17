import "./About.scss";

export default function About({ scrollRef }) {
	return (
		<section className="about" ref={(aboutRef) => (scrollRef.current[0] = aboutRef)}>
			<div className="about-container">
				<div className="content">
					<p>복잡한 요구사항 속에서도 핵심을 놓치지 않는 디자인을 합니다.</p>
					<p> 수많은 선택지 앞에서도 본질을 꿰뚫어 필요한 것에 집중하고,</p>
					<p>나머지를 과감히 포기하는 용기를 통해 최적의 해결책을 제시합니다.</p>
					<br />
					<h2>DaEun Kim • 김다은</h2>
					<br />
					<div className="personal-info">
						<div>rla971203@gmail.com</div>
						<div> | </div>
						<a href="https://github.com/daeun012" target="blank">
							Github
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
