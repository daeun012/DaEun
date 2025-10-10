import { FaGithub } from "react-icons/fa";

export default function FunBun() {
	return (
		<div className="detail-container">
			<div className="title">
				FUN & BUN
				<div className="sub-title">2021.06 ~ 2021.08 (4인 프로젝트)</div>
				<a href="https://github.com/daeun012/FUN-BUN" target="_blank" rel="noreferrer">
					<FaGithub size={20} />
					Github
				</a>
			</div>
			<div className="bar" />
			<div className="body">
				<img src="https://daeun012.github.io/DaEun/images/funbun_main.png" alt="FunBun 메인페이지"></img>
				<h3>📌 요약</h3>
				<p>
					<strong> 학과 선후배를 연결하여 정보 교류와 소통이 가능하도록 돕는 선후배 매칭 및 그룹 채팅 서비스</strong>
				</p>
				<ul>
					<li>코로나로 인한 비대면 수업으로 학교생활 정보를 얻기 어려운 학생들을 돕기 위해 개발</li>
					<li>JSON web tokens 을 이용한 사용자 생성 및 인증</li>
					<li>Socket.io 를 통한 실시간 채팅 구현</li>
					<li>Material UI 프레임워크 사용</li>
					<li>풀스택 개발 </li>
				</ul>
				<br />
				<h3>⭐️ 주요기능</h3>
				<ul>
					<li>로그인 및 회원가입</li>
					<li>그룹 생성 / 가입 / 나가기 / 자동 삭제 / 정보 보기 / 검색</li>
					<li>선후배 매칭</li>
					<li>JSON web tokens 을 이용한 사용자 생성 및 인증</li>
					<li>Socket.io 를 통한 실시간 채팅</li>
					<li>반응형 디자인</li>
				</ul>
				<br />
				<h3>🔨 기술스택</h3>
				<ul>
					<li>React JS</li>
					<li>Node JS (Express)</li>
					<li>MongoDB / Mongoose</li>
					<li>Material UI</li>
					<li>JSON web tokens</li>
					<li>Websockets (socket.io) for real-time</li>
					<li>Axios for API requests</li>
				</ul>
			</div>
		</div>
	);
}
