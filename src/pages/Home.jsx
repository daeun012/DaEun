import React from 'react';
import ButtonNavLink from '../components/ButtonNavLink/ButtonNavLink';
import './Home.scss';

export default function Home() {
	return (
		<section className="home">
			<div className="home-box-wrapper">
				<div className="logo-box">
					<div className="title">D</div>
				</div>
				<div className="profile-box">
					<div className="title">DaEun</div>
					<div className="desc">Front-end Developer</div>
				</div>
			</div>
			<div className="buttonNav">
				<ButtonNavLink name="About" />
				<ButtonNavLink name="Career" />
				<ButtonNavLink name="Project" />
				<ButtonNavLink name="Study" />
				<ButtonNavLink name="Blog" />
			</div>
		</section>
	);
}
