import React from 'react';

function Humechanic() {
  return (
    <React.Fragment>
      <div className="title">
        Humechanic
        <div className="sub-title">로봇동아리 홈페이지</div>
      </div>
      <div className="bar"></div>
      <div className="body">
        <img src="../images/humechanic.jpg" alt="Humechanic 로고"></img>
        <p>
          HTML, CSS, JavaScript 공부를 시작하면서 만든 첫 프로젝트로, <b>학과 내 동아리 홈페이지를 만들어 보았습니다.</b> 기본적인 홈페이지의 기능들을 구현하였습니다.
        </p>
        <a href="https://github.com/daeun012/Humechanic" target="_blank" rel="noreferrer">
          Github 바로가기
        </a>
        <h3>주요기능</h3>
        <p>
          <li>로그인 및 회원가입</li>
          <li>User 접근 제한 및 유효성 확인</li>
          <li>게시판 작성/수정/삭제</li>
          <li>게시판 페이지, 댓글 기능</li>
        </p>
        <h3>기술 스택</h3>
        <p>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>MongoDB / Mongoose</li>
          <li>NodeJS (Express)</li>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Humechanic;
