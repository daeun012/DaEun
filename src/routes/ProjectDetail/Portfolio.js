import React from 'react';

function Portfolio() {
  return (
    <React.Fragment>
      <div className="title">
        Portfolio
        <div className="sub-title">포트폴리오 웹사이트</div>
      </div>
      <div className="bar"></div>
      <div className="body">
        <img src="../images/portfolio_main.png" alt="포토폴리오 메인 페이지"></img>
        <p>
          <b>포트폴리오 용도로 제작한 React 기반의 웹사이트</b>입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
        </p>
        <a href="https://github.com/daeun012/DaEun" target="_blank" rel="noreferrer">
          Github 바로가기
        </a>
        <h3>주요기능</h3>
        <p>
          <li>간단한 자기소개</li>
          <li>인적 사항</li>
          <li>보유 기술 스택</li>
          <li>GitHub/블로그 링크</li>
          <li>프로젝트 경험</li>
        </p>
        <h3>기술 스택</h3>
        <p>
          <li>React JS</li>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
