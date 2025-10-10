import { FaGithub } from "react-icons/fa";

export default function Humechanic() {
	return (
		<div className="detail-container">
			<div className="title">
				Humechanic
				<div className="sub-title">2021.04 ~ 2021.05 (개인 프로젝트)</div>
				<a href="https://github.com/daeun012/Humechanic" target="_blank" rel="noreferrer">
					<FaGithub size={20} />
					Github
				</a>
			</div>
			<div className="bar"></div>
			<div className="body">
				<img src={`${process.env.PUBLIC_URL}/images/humechanic_main.png`} alt="Humechanic 메인"></img>
				<h3>📌 요약</h3>
				<p>
					<strong>로봇 동아리 홈페이지</strong>
				</p>
				<ul>
					<li>로봇 동아리를 소개하기 위해 만든 웹사이트</li>
					<li>최초 웹 개발 경험 (HTML, CSS, JS, NodeJs, MongoDB)</li>
					<li>Bootstrap UI 프레임워크 사용</li>
				</ul>
				<br />
				<h3>⭐️ 주요기능</h3>
				<ul>
					<li>로그인 및 회원가입</li>
					<li>User 접근 제한 및 유효성 확인</li>
					<li>게시판 작성/수정/삭제</li>
					<li>게시판 페이지, 댓글 기능</li>
				</ul>
				<br />
				<h3>🔨 기술스택</h3>
				<ul>
					<li>HTML/CSS/JS</li>
					<li>Bootstrap</li>
					<li>MongoDB / Mongoose</li>
					<li>NodeJS (Express)</li>
				</ul>
			</div>
		</div>
	);
}
