import cn from "classnames";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ButtonNavLink from "../navLinkButton/NavLinkButton";
import "./Header.scss";
import MenuButton from "./menuButton/MenuButton";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<div className="header-container">
			<div className="header-wrapper">
				<div className="items left-side">
					<Link className="logo-wrapper" to="/">
						DAEUN
					</Link>
				</div>
				<div className="items right-side">
					<MenuButton open={open} toggleMenu={() => setOpen((prev) => !prev)} />
					<div className="menu">
						<NavLink className={({ isActive }) => cn("menu-item", isActive && "selected")} to="/about" end>
							About _
						</NavLink>
						<NavLink className={({ isActive }) => cn("menu-item", isActive && "selected")} to="/career" end>
							Career _
						</NavLink>
						<NavLink className={({ isActive }) => cn("menu-item", isActive && "selected")} to="/project" end>
							Project _
						</NavLink>
						<a className="menu-item" target="_blank" href="https://daeun012.github.io/" rel="noreferrer">
							Blog _
						</a>
					</div>

					<CSSTransition classNames="mobile-menu" in={open} timeout={500} unmountOnExit>
						<div className="mobile-menu-wrapper" onClick={() => setOpen(false)}>
							<div className="menu-buttons-group">
								<ButtonNavLink name="About" />
								<ButtonNavLink name="Career" />
								<ButtonNavLink name="Project" />
								<ButtonNavLink name="Blog" />
							</div>
						</div>
					</CSSTransition>
				</div>
			</div>
		</div>
	);
}
