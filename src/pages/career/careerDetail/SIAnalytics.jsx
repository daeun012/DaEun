import { IoIosLink } from "react-icons/io";

export default function SIAnalytics() {
	return (
		<div className="detail-container">
			<div className="title">
				SI Aanalytics / Frontend Developer
				<div className="sub-title">2021.09.27 ~ 2024.02.19</div>
			</div>
			<div className="bar" />
			<div className="body">
				<h3>📢 회사 소개</h3>
				<p>
					“지구를 바라보고, 세상을 읽다.” 인공지능 기반의 위성‧항공 영상 분석을 통해, 지구 관측 데이터가 담고 있는
					의미를 해석하고 사람들이 더 나은 결정을 내릴 수 있도록 돕는 기업입니다.
				</p>
				<a className="ref" href="https://si-analytics.ai/" target="_blank" rel="noreferrer">
					<IoIosLink size={16} /> SIA 홈페이지
				</a>

				<br />
				<h3>👩🏻‍💻 Frontend Developer</h3>
				<p>
					일상에서 접하기 어려운 "인공위성" 도메인을 경험한 특별한 기회였습니다. GIS 기반 웹 시스템을 위한 다양한
					프론트엔드 프로젝트에 참여하며, 개발 난이도가 높은 작업을 주로 맡아 수행했습니다. 그 과정에서 지도 데이터를
					효과적으로 처리하는 방법과 지리정보시스템 구축에 필요한 기술을 익혔습니다. 특히, 인공위성은 대량의 데이터를
					수집하고 분석하는 특성을 지녔기에, 저는 이러한 데이터를 사용자에게 직관적으로 전달하기 위한 시각화와 대시보드
					개발에 주력했습니다. 덕분에 복잡한 정보를 명확히 전달하는 데이터 시각화 역량도 함께 키울 수 있었습니다.
				</p>
				<p className="stack">
					TypeScript, React, Redux, redux-saga, react-router, react-i18n, Sass, Openlayers, Victory, Recharts,
					Storybook, Ant Design, gRPC
				</p>
				<br />
				<div className="task">
					Ovision 디자인 시스템 구축
					<span className="sub-title">2022.04 ~ 2022.10</span>
				</div>
				<ul>
					<li>초기 개발 환경 구성 및 개발 방향 설정</li>
					<li>디자인 시스템 정책 논의 및 결정</li>
					<li>디자인 시스템 컴포넌트 12종 개발</li>
					<li>Storybook 도입 및 문서 배포, 생산성 향상을 위한 Storybook 템플릿 제작</li>
					<a
						className="ref"
						href="https://62342e522fbdd5003a051cbc-wlcuppuqbr.chromatic.com/?path=/story/foundation-colors--page"
						target="_blank"
						rel="noreferrer"
					>
						<IoIosLink size={16} /> ODS 문서 바로가기
					</a>
				</ul>
				<br />
				<div className="task">
					위성 영상 분석 실시간 모니터링 시스템 개발 및 유지보수
					<span className="sub-title">2021.09 ~ 2024.02</span>
				</div>
				<ul>
					<li>React/TypeScript/OpenLayers 기반 웹 GIS 서비스 개발 및 유지보수</li>
					<li>레거시 코드와 시스템에서 개발환경에 병목이 되는이슈를 수정하여 DX 향상</li>
					<li>
						Recharts, VictoryChart 라이브러리를 활용해 데이터 시각화
						<a className="ref" href="https://worldview.earthdata.nasa.gov/" target="_blank" rel="noreferrer">
							<IoIosLink size={16} /> 유사기능 참고: Worldview 타임라인
						</a>
					</li>

					<li>
						지도 편집 툴, 영상 타임라인, 통합 검색, 불편 사항 접수, 프로젝트 관리, 영상 검수, 실시간 모니터링, 보고서
						생성, 환경설정 등 핵심 기능 개발
						<a className="ref" href="https://openlayers-editor.geops.com/" target="_blank" rel="noreferrer">
							<IoIosLink size={16} /> 유사기능 참고: Openlayers Editor
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
