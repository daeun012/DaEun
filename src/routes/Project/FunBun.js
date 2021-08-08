import React from 'react';

function FunBun() {
  return (
    <div class="container-detail">
      <div class="title">
        FUN & BUN
        <div class="sub-title">대학생들을 위한 랜덤 매칭 및 그룹 채팅 서비스</div>
      </div>
      <div class="bar"></div>
      <div class="body">
        <p>
          코로나 사태로 인한 비대면 수업으로, 학교 생활에 대한 정보를 얻기 어려운 학생들에게 학과 선후배 간 연결을 통해 정보 교류 및 소통 할 수 있는 환경을 제공해주는 랜덤 매칭 및 그룹채팅 서비스
          입니다.
        </p>
        <h3>UX/UI Design</h3>
        <p>
          출시되어 있는 안드로이드 버전을 기반으로 사용자 사용흐름을 분석하여 탐색과 검색 시나리오를 개선하고, 서비스 곳곳에서 사용자에게 안내가 미흡했던 부분들을 사용자가 직관적으로 확인할 수 있도록
          설계했다. 이마트24와 협업을 하다보니 서비스 규모에 비해 복잡한 정보구조를 표현해야 하는 경우가 발생하는데, 사용자에게 오해를 불러일으키지 않으면서 브랜딩과 사용성을 모두 확보할 수 있도록
          하는데에 집중하여 작업을 진행해 나가고 있다.
        </p>
        <p>
          안드로이드 버전은 팀 합류 이전에 확정된 디자인이며, iOS는 안드로이드 버전을 기반으로 하되 그래픽과 타이포를 정돈하고 디자인 시스템을 구축하여 생산성을 확보함과 동시에 사용성을 개선하여
          2019년 4월 런칭하였다.
          <br />
          <br />
        </p>
        <p>
          <a href="https://itunes.apple.com/kr/app/%EC%99%80%EC%9D%B8%ED%8F%AC%EC%9D%B8%ED%8A%B8/id1458297807?mt=8" target="_blank">
            와인포인트 iOS
          </a>
        </p>
        <p>
          <a href="https://play.google.com/store/apps/details?id=wpco.winepoint.android&hl=ko" target="_blank">
            와인포인트 Android
          </a>
        </p>
        <br />
        <h3>Frontend Dev</h3>
        <p>
          vue.js를 사용해서 만든 첫 상용 프로덕트. 처음부터 함께 만든 게 아니라 중간에 합류한 것이다보니, 초기에는 많은 혼란스러움이 있었다. 어플리케이션의 전체적인 프로젝트 스트럭쳐부터 개인작업과는
          달랐고, 컴포넌트를 구성하는 단위나 사용 방식등도 혼자 여태까지 작업한 것과는 전혀 다른 새로운 방식들이 많아 코드를 분석하며 많이 배울 수 있었다.
          <br />
          <br />
          인원이 충분치 않은 스타트업이다 보니, 프론트엔드 작업과 서버 작업을 함께 진행하는 경우가 많았다. 예를 들어 점포 휴일을 관리하는 달력을 추가하는 경우 기본적인 레이아웃 디자인, 프론트엔드
          작업, 서버 작업, 쿼리 작업을 동시에 진행하여 실제 서비스가 확장되어가는 과정을 직접적으로 경험할 수 있었고, 통신에 대한 이해도 좀 더 명확히 할 수 있어 도움이 많이 되었다.
        </p>
        <br />
        <h3>프로젝트 기여도 및 스펙</h3>
        <h4>서비스 어드민 (기여도 20%)</h4>
        <ul>
          <li>Vue.js</li>
          <li>Vuex</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
        </ul>
        <h4>주문 관리자 (기여도 30%)</h4>
        <ul>
          <li>Vue.js</li>
          <li>Vuex</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
        </ul>
        <h4>랜딩 페이지 (기여도 100%)</h4>
        <ul>
          <li>Vue.js</li>
        </ul>
        <p>
          <a href="https://www.winepoint.co.kr/" target="_blank">
            와인포인트 Landing Page
          </a>
        </p>
      </div>
    </div>
  );
}

export default FunBun;
