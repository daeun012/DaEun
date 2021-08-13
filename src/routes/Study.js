import React from 'react';
import PageTitle from '../component/PageTitle/PageTitle';
import './Study.scss';

const Study = () => (
  <div className="container-study">
    <PageTitle title="Study" />
    <div className="body">
      <h3>공부한 내용들을 기록하였습니다.</h3>
      <div className="links">
        <a href="https://github.com/daeun012/MemoApp" target="_blank" rel="noreferrer">
          <div className="title"> MemoApp</div>
          <div className="arrow-wrapper">
            <img src="./images/link_arrow2.svg" alt="MemoApp" />
          </div>
        </a>
        <a href="https://powerdev.tistory.com/" target="_blank" rel="noreferrer">
          <div className="title">정보처리기사</div>
          <div className="arrow-wrapper">
            <img src="./images/link_arrow2.svg" alt="정보처리기사 정리" />
          </div>
        </a>
        <a href="https://github.com/daeun012/react-study" target="_blank" rel="noreferrer">
          <div className="title">React</div>
          <div className="arrow-wrapper">
            <img src="./images/link_arrow2.svg" alt="React" />
          </div>
        </a>
        <a href="https://github.com/daeun012/javascript-study" target="_blank" rel="noreferrer">
          <div className="title">Javascript</div>
          <div className="arrow-wrapper">
            <img src="./images/link_arrow2.svg" alt="Javascript" />
          </div>
        </a>
        <a href="https://github.com/daeun012/nodejs-study" target="_blank" rel="noreferrer">
          <div className="title">NodeJS</div>
          <div className="arrow-wrapper">
            <img src="./images/link_arrow2.svg" alt="NodeJS" />
          </div>
        </a>
        <a href="https://github.com/daeun012/css-study" target="_blank" rel="noreferrer">
          <div className="title">CSS</div>
          <div className="arrow-wrapper">
            <img src="./images/link_arrow2.svg" alt="CSS" />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Study;
