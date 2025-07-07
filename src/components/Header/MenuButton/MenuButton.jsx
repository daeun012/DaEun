import classNames from "classnames";
import React from "react";
import "./MenuButton.scss";

export default function MenuButton({ open, toggleMenu }) {
	return (
		<div className={classNames("menuIcon-container", { active: open })} onClick={toggleMenu}>
			<div className="menuIcon-wrapper">
				<div className="bar top" />
				<div className="bar mid first" />
				<div className="bar mid second" />
				<div className="bar bottom" />
			</div>
		</div>
	);
}
