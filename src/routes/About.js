import React from 'react';
import PageTitle from '../component/PageTitle/PageTitle';
import './About.scss';

const About = () => (
  <div className="container-about">
    <PageTitle title="About" />
    <div className="body">
      <h2 className="name">DaEun Kim • 김다은</h2>

      <h3>왜?로 시작하는 개발자</h3>
      <p>
        <b>항상 왜?라는 의문을 품으며 학습하고 습득한 내용들을 기록합니다.</b> 아는 것 만으로는 충분하지 않다고 생각합니다. 토이 프로젝트를 통해 적용해 나가며 성장하고 있습니다.
      </p>
      <p>
        <b>집요합니다.</b> 개발을 하다 보면 쉽게 풀리지 않는 문제에 반드시 마주하게 됩니다. 문제를 해결하는 것에 그치지 않고, 문제가 왜 발생했고 왜 해결되었는지 끝까지 파고드는 집요함이 있습니다.
      </p>
      <p>
        <b>배워야 하고 알아야 합니다.</b> 여전히 부족합니다. 그러기에 배우고 싶습니다.
      </p>
      <p>
        <b>한순간의 열정이 아닌 꾸준함으로 승부하겠습니다. </b>
      </p>
      <div className="links">
        <p>이메일 : kdw971203@naver.com</p>
        <p>연락처 : 010-4116-5131</p>
        <p>
          Github :{' '}
          <a href="https://github.com/daeun012" target="blank">
            https://github.com/daeun012
          </a>
        </p>
      </div>
      <div className="abilities">
        <div className="skill">
          <h3>Front-end</h3>
          <div className="img">
            <img src="images/web.png" alt="html" height="100" width="250" />
            <img src="images/react.png" alt="react" width="90" />
            <img src="images/redux.png" alt="redux" width="100" />
          </div>
        </div>
        <div className="skill">
          <h3>Back-end</h3>
          <div className="img">
            <img src="images/nodejs.png" alt="node.js" height="100" width="100" /> <img src="images/express.png" height="100" alt="express.js" width="150" />
          </div>
        </div>
        <div className="skill">
          <h3>Database</h3>
          <div className="img">
            <img src="images/mysql.png" alt="mysql" height="100" width="100" style={{ marginRight: 25 }} />
            <img src="images/mongodb.png" alt="mongoDB" height="100" width="100" />
          </div>
        </div>
        <div className="skill">
          <h3>Etc</h3>
          <div className="img">
            <img src="images/git.png" alt="git" height="100" width="100" />
            <img src="images/github.png" alt="github" height="100" width="100" />
          </div>
        </div>
        <div className="skill">
          <h3>Certificate</h3>
          <div className="img">
            <img src="images/certificate.jpg" alt="certificate" height="120" width="180" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
