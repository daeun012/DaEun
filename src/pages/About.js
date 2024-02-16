import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import "./About.scss";

const About = () => (
  <div className="about">
    <PageTitle title="About" />
    <div className="body">
      <h2 className="name">DaEun Kim • 김다은</h2>
      <p>
        <b>항상 왜?라는 의문을 품으며 학습하고 습득한 내용들을 기록합니다.</b> 아는 것 만으로는 충분하지 않다고 생각합니다.
      </p>
      <p>
        <b>집요합니다.</b> 개발을 하다 보면 쉽게 풀리지 않는 문제에 반드시 마주하게 됩니다. 문제를 해결하는 것에 그치지 않고, 문제가 왜 발생했고 왜 해결되었는지
        끝까지 파고드는 집요함이 있습니다.
      </p>
      <p>
        <b>배워야 하고 알아야 합니다.</b> 여전히 부족합니다. 그러기에 배우고 싶습니다.
      </p>
      <p>
        <b>한순간의 열정이 아닌 꾸준함으로 승부하겠습니다. </b>
      </p>
      <div className="detail-info">
        <p>이메일 : rla971203@gmail.com</p>
        <p>연락처 : 010-4116-5131</p>
        <p>
          Github :{" "}
          <a href="https://github.com/daeun012" target="blank">
            https://github.com/daeun012
          </a>
        </p>
      </div>
      <div className="skill-group">
        <div className="skill">
          <h3>Frontend</h3>
          <div className="skill-img-wrapper">
            <img src="https://daeun012.github.io/DaEun/images/web.png" alt="html" height="100" width="250" />
            <img src="https://daeun012.github.io/DaEun/images/react.png" alt="react" width="90" />
            <img src="https://daeun012.github.io/DaEun/images/redux.png" alt="redux" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/typescript.png" alt="typescript" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/openlayers.png" alt="openlayers" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/bootstrap.png" alt="bootstrap" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/ant-design.png" alt="ant-design" height="50" width="200" />
          </div>
        </div>
        <div className="skill">
          <h3>Backend</h3>
          <div className="skill-img-wrapper">
            <img src="https://daeun012.github.io/DaEun/images/nodejs.png" alt="node.js" height="100" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/express.png" height="100" alt="express.js" width="150" />
            <img src="https://daeun012.github.io/DaEun/images/mongodb.png" alt="mongoDB" height="100" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/mysql.png" alt="mysql" height="100" width="100" />
          </div>
        </div>
        <div className="skill">
          <h3>Etc</h3>
          <div className="skill-img-wrapper">
            <img src="https://daeun012.github.io/DaEun/images/git.png" alt="git" height="100" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/github.png" alt="github" height="100" width="100" />
            <img src="https://daeun012.github.io/DaEun/images/gitkraken.png" alt="gitkraken" height="100" width="100" />
          </div>
        </div>
        <div className="skill">
          <h3>Certificate</h3>
          <div className="skill-img-wrapper">
            <img src="https://daeun012.github.io/DaEun/images/certificate.jpg" alt="certificate" height="100" width="130" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
