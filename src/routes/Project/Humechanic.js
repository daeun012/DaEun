import React from 'react';

function Humechanic() {
  return (
    <div class="container-detail">
      <div class="title">
        Humechanic
        <div class="sub-title">로봇동아리 홈페이지</div>
      </div>
      <div class="bar"></div>
      <div class="body">
        {' '}
        <img src="/images/humechanic.jpg" alt=""></img>
        <p>
          <b>HTML, CSS, JavaScript 공부를 시작하면서 만든 첫 프로젝트입니다.</b> 기본적인 홈페이지의 기능들을 구현했습니다.
        </p>
        <a href="https://github.com/daeun012/Humechanic" target="_blank">
          Github 바로가기
        </a>
        <p>
          <h3>주요기능</h3>
          <li>Vue.js</li>
          <li>Vuex</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
        </p>
        <h3>Frontend Dev</h3>
        <p>
          vue.js를 사용해서 만든 첫 상용 프로덕트. 처음부터 함께 만든 게 아니라 중간에 합류한 것이다보니, 초기에는 많은 혼란스러움이 있었다. 어플리케이션의 전체적인 프로젝트 스트럭쳐부터 개인작업과는
          달랐고, 컴포넌트를 구성하는 단위나 사용 방식등도 혼자 여태까지 작업한 것과는 전혀 다른 새로운 방식들이 많아 코드를 분석하며 많이 배울 수 있었다.
          <br />
          <br />
          인원이 충분치 않은 스타트업이다 보니, 프론트엔드 작업과 서버 작업을 함께 진행하는 경우가 많았다. 예를 들어 점포 휴일을 관리하는 달력을 추가하는 경우 기본적인 레이아웃 디자인, 프론트엔드
          작업, 서버 작업, 쿼리 작업을 동시에 진행하여 실제 서비스가 확장되어가는 과정을 직접적으로 경험할 수 있었고, 통신에 대한 이해도 좀 더 명확히 할 수 있어 도움이 많이 되었다.
        </p>
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

export default Humechanic;
