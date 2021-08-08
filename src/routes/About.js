import React from 'react';
import PageTitle from '../component/PageTitle/PageTitle';
import './About.scss';

function About() {
  return (
    <div className="container-about">
      <PageTitle title="About" />
      <div className="body">
        <h2 className="name">DaEun Kim • 김다은</h2>
        <h3>왜?로 시작하는 개발자</h3>
        <p>항상 왜? 라는 의문을 품으며 학습하고 습득한 내용들을 기록합니다. 아는 것 만으로는 충분하지 않다고 생각합니다. 토이 프로젝트를 통해 적용해 나가며 성장하고 있습니다.</p>
        <p>배움을 즐깁니다. </p>
        <p>꾸준함을 중요시합니다. </p>
        <div className="links">
          <p>kdw971203@naver.com</p>
          <a href="https://github.com/daeun012" target="blank">
            Github
          </a>
        </div>
        <div className="abilities">
          <div className="skill">
            <h3>Front-end</h3>
            <div class="img">
              <img src="images/web.png" alt="html" height="100" width="250" />
              <img src="images/react.png" alt="react" width="90" />
              <img src="images/redux.png" alt="redux" width="100" />
            </div>
          </div>
          <div className="skill">
            <h3>Back-end</h3>
            <div class="img">
              <img src="images/nodejs.png" alt="node.js" height="100" width="100" /> <img src="images/express.png" height="100" alt="express.js" width="150" />
            </div>
          </div>
          <div className="skill">
            <h3>Database</h3>
            <div class="img">
              <img src="images/mysql.png" alt="mysql" height="100" width="100" style={{ marginRight: 25 }} />
              <img src="images/mongodb.png" alt="mongoDB" height="100" width="100" />
            </div>
          </div>
          <div className="skill">
            <h3>Etc</h3>
            <div class="img">
              <img src="images/git.png" alt="git" height="100" width="100" />
              <img src="images/github.png" alt="github" height="100" width="100" />
            </div>
          </div>
          <div className="skill">
            <h3>Certificate</h3>
            <div class="img">
              <img src="images/certificate.jpg" alt="certificate" height="120" width="180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
