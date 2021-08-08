import React from 'react';
import PageTitle from '../../component/PageTitle/PageTitle';
import Card from '../../component/Card/Card';

function Project() {
  return (
    <div class="container-responsive">
      <PageTitle title="Project" />
      <div class="card-list">
        <Card img="images/funbun.png" title="FUN & BUN" subTitle="react" desc="대학생들을 위한 랜덤 매칭 및 그룹 채팅 서비스" match="FunBun"></Card>
        <Card img="images/humechanic.jpg" title="Humechanic" subTitle="html, css, javascript" desc="로봇 동아리 홈페이지" match="Humechanic"></Card>
      </div>
    </div>
  );
}

export default Project;
