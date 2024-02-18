import React from "react";
import "./SIAnalytics.scss";

function SIAnalytics() {
  return (
    <React.Fragment>
      <div className="title">
        SI Aanalytics
        <div className="sub-title">인공지능 기반 위성/항공 영상 분석 서비스</div>
      </div>
      <div className="bar" />
      <div className="body">
        <p>
          지구 관측을 통해 현명한 결정을 하기 위한 가치를 제공하는, <b>인공지능 기반 위성/항공 영상 분석</b> 회사입니다.
        </p>
        <a href="https://si-analytics.ai/" target="_blank" rel="noreferrer">
          SIA 홈페이지
        </a>
        <a href="https://recruit.si-analytics.ai/" target="_blank" rel="noreferrer">
          SIA 소개
        </a>
        <h2>Frontend Developer</h2>
        <p>
          일상생활에서 접하기 쉽지 않은 도메인인 "인공위성"에 대해 접해볼 수 있는 기회였습니다. GIS 기반 웹 시스템을 위한 여러 FE 프로젝트에 참여하여 주로 개발
          복잡도와 난이도가 높은 작업을 맡아 수행하였습니다. 이를 통해 지도 데이터를 효과적으로 처리하고 지리적 정보 시스템을 개발하는 데 필요한 기술을 익힐 수
          있었습니다. 또한 인공위성은 대량의 데이터를 수집하고 분석하는 데 사용되기 때문에, 데이터를 시각적으로 표현하고 사용자에게 쉽게 이해할 수 있는 형태로
          제공하고자 노력하였습니다. 이러한 과정에서 데이터 시각화 및 대시보드 개발 등 기술적인 스킬을 배울 수 있었습니다.
        </p>
        <div className="stack">
          TypeScript, React, Redux, redux-saga, react-router, react-i18n, Sass, Openlayers, Victory, Recharts, Storybook, Ant Design, gRPC{" "}
        </div>
        <h3>위성 영상 분석 실시간 모니터링 시스템 개발</h3>
        <p>
          <li>React 기반 FE 프로젝트 유지보수 및 기능 개발</li>
          <li>GIS 오픈소스인 Openlayers 라이브러리 사용</li>
          <li>Victory 차트 라이브러리를 활용해 위성 영상 타임라인 개발</li>
          <div className="reference">
            유사기능 참고:
            <a href="https://worldview.earthdata.nasa.gov/" target="_blank" rel="noreferrer">
              Worldview 타임라인
            </a>
          </div>
          <li>지도 편집 툴 개발</li>
          <li>지도 위 그림판과 같은 기능을 위한 Openlayers Custom Interaction 개발</li>
          <div className="reference">
            유사기능 참고:
            <a href="https://openlayers-editor.geops.com/" target="_blank" rel="noreferrer">
              Openlayers Editor
            </a>
          </div>
          <li>그 외 불편 사항 접수, 프로젝트 관리, 영상 검수, 실시간 모니터링, 보고서 생성, 환경설정 등 중요 페이지 개발</li>
        </p>
        <h3>디자인 시스템 개발</h3>
        <p>
          <li>초기 개발 환경 구성 및 개발 방향 설정</li>
          <li>디자인 시스템 정책 논의 및 결정</li>
          <li>디자인 시스템 ODS 컴포넌트 개발</li>
          <li>Storybook 문서 배포 및 생산성 증가를 위한 Storybook 템플릿 제작</li>
          <div className="reference">
            <a href="https://62342e522fbdd5003a051cbc-wlcuppuqbr.chromatic.com/?path=/story/foundation-colors--page" target="_blank" rel="noreferrer">
              ODS 문서 바로가기
            </a>
          </div>
        </p>
      </div>
    </React.Fragment>
  );
}

export default SIAnalytics;
