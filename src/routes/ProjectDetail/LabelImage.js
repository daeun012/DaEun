import React from 'react';

function LabelImage() {
  return (
    <React.Fragment>
      <div className="title">
        LabelImage
        <div className="sub-title">AI 학습을 위한 데이터셋을 만드는 도구인 이미지 라벨링 툴</div>
      </div>
      <div className="bar"></div>
      <div className="body">
        <img src="https://daeun012.github.io/DaEun/images/labelGif.gif" alt="이미지 라벨"></img>
        <p>이미지를 로드하고, 이미지 위에 박스 라벨을 생성하는 웹 클라이언트 입니다.</p>
        <a href="https://github.com/daeun012/Image-Labeling-Tool" target="_blank" rel="noreferrer">
          Github 바로가기
        </a>
        <h3>주요기능</h3>
        <p>
          <li>라벨 생성</li>
          <li>라벨 선택</li>
          <li>라벨 이동</li>
          <li>라벨 삭제 : 라벨 선택 상에서 Backspace 또는 Delete 키 눌러 라벨 삭제</li>
          <li>라벨 크기 조절</li>
          <li>라벨 두번 클릭 시 선택 취소</li>
        </p>
        <h3>기술 스택</h3>
        <p>
          <li>React JS</li>
        </p>
      </div>
    </React.Fragment>
  );
}

export default LabelImage;
