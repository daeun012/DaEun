import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import Card from "../components/Card/Card";
import { useLocation } from "react-router-dom";

const Project = () => {
  const { pathname } = useLocation();

  return (
    <div className="responsive-container">
      <PageTitle title="Project" />
      <div className="card-list">
        <Card
          img="https://daeun012.github.io/DaEun/images/funbun.png"
          title="FUN & BUN"
          subTitle="react, nodejs..."
          desc="대학생들을 위한 랜덤 매칭 및 그룹 채팅 서비스"
          match={`${pathname}/FunBun`}
        />
        <Card
          img="https://daeun012.github.io/DaEun/images/humechanic.jpg"
          title="Humechanic"
          subTitle="html, css, javascript"
          desc="로봇 동아리 홈페이지"
          match={`${pathname}/Humechanic`}
        />
        <Card
          img="https://daeun012.github.io/DaEun/images/portfolio.png"
          title="Portfolio"
          subTitle="react"
          desc="포토폴리오"
          match={`${pathname}/Portfolio`}
        />
        <Card
          img="https://daeun012.github.io/DaEun/images/labelimage.png"
          title="LabelImage"
          subTitle="react"
          desc="이미지 라벨 툴"
          match={`${pathname}/LabelImage`}
        />
      </div>
    </div>
  );
};

export default Project;
