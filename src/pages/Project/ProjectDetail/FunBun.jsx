export default function FunBun() {
	return (
		<>
			<div className="title">
				FUN & BUN
				<div className="sub-title">대학생들을 위한 랜덤 매칭 및 그룹 채팅 서비스</div>
			</div>
			<div className="bar"></div>
			<div className="body">
				<img src="https://daeun012.github.io/DaEun/images/funbun_main.png" alt="FunBun 메인페이지"></img>
				<p>
					코로나 사태로 인한 비대면 수업으로, 학교생활에 대한 정보를 얻기 어려운 학생들에게 학과 선후배 간 연결을 통해
					정보 교류 및 소통 할 수 있는 환경을 제공해주는
					<b> 랜덤 매칭 및 그룹 채팅 서비스</b>
					입니다.
				</p>
				<a href="https://github.com/daeun012/FUN-BUN" target="_blank" rel="noreferrer">
					Github 바로가기
				</a>
				<h3>주요기능</h3>
				<p>
					<li>로그인 및 회원가입</li>
					<li>그룹 생성/가입/나가기/자동삭제/정보 보기/검색</li>
					<li>랜덤 매칭</li>
					<li>JSON web tokens 을 이용한 사용자 생성 및 인증</li>
					<li>Socket.io 를 통한 실시간 채팅</li>
					<li>반응형 디자인</li>
				</p>
				<h3>기술 스택</h3>
				<p>
					<li>React JS</li>
					<li>Node JS (Express)</li>
					<li>MongoDB / Mongoose</li>
					<li>Material UI</li>
					<li>JSON web tokens</li>
					<li>Websockets (socket.io) for real-time</li>
					<li>Axios for API requests</li>
				</p>
			</div>
		</>
	);
}
