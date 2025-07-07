import React from "react";
import { Link } from "react-router-dom";
import "./NavLinkButton.scss";
import { PiArrowCircleRightThin } from "react-icons/pi";

export default function NavLinkButton({ name }) {
	return (
		<div className="buttonNavLink">
			{name === "Blog" ? (
				<a className="link-wrapper" target="_blank" href="https://daeun012.github.io/" rel="noreferrer">
					<div className="title">
						{name} <div className="bar" />
					</div>
					<PiArrowCircleRightThin className="arrow-icon" size={50} />
				</a>
			) : (
				<Link className="link-wrapper" activeclassname="selected" to={`/${name.toLowerCase()}`}>
					<div className="title">
						{name} <div className="bar" />
					</div>
					<PiArrowCircleRightThin className="arrow-icon" size={50} />
				</Link>
			)}
		</div>
	);
}
