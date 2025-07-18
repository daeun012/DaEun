import classNames from "classnames";
import "./MenuButton.scss";

export default function MenuButton({ open, toggleMenu }) {
	return (
		<button className={classNames("menuIcon-container", { active: open })} onClick={toggleMenu}>
			<div className="menuIcon-wrapper">
				<div className="bar top" />
				<div className="bar mid first" />
				<div className="bar mid second" />
				<div className="bar bottom" />
			</div>
		</button>
	);
}
