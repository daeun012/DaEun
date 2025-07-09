import NavLinkButton from "../components/navLinkButton/NavLinkButton";
import "./Main.scss";

export default function Main() {
	return (
		<section className="home">
			<div className="home-box-wrapper">
				<div className="logo-box">
					<div className="title">D</div>
				</div>
				<div className="profile-box">
					<div className="title">DaEun</div>
					<div className="desc">
						<div>UX/UI Designer</div>
						<div>Front-end Developer</div>
					</div>
				</div>
			</div>
			<div className="buttonNav">
				<NavLinkButton name="About" />
				<NavLinkButton name="Career" />
				<NavLinkButton name="Project" />
				<NavLinkButton name="Blog" />
			</div>
		</section>
	);
}
