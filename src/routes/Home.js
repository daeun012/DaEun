import React from 'react';
import ButtonNavLink from '../component/ButtonNavLink/ButtonNavLink';
import './Home.scss';

function Home() {
  return (
    <section className="Home">
      <div className="home-box-wrapper">
        <div class="logo-box">
          <div className="title">D</div>
        </div>
        <div className="profile-box">
          <div className="title">DaEun</div>
          <div className="desc">Front-end Developer</div>
        </div>
      </div>
      <div className="buttonNav">
        <ButtonNavLink name="About" />
        <ButtonNavLink name="Project" />
        <ButtonNavLink name="Study" />
        <ButtonNavLink name="Blog" />
      </div>
    </section>
  );
}

export default Home;
