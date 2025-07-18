import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import MenuButton from "./menuButton/MenuButton";

const NAV_MENU = [
	{ idx: 0, name: "About" },
	{ idx: 1, name: "Projects" },
	{ idx: 2, name: "Career" },
];

export default function Header({ scrollRef }) {
	const [open, setOpen] = useState(false);
	const [navIndex, setNavIndex] = useState(null);
	const [scrollPosition, setScrollPosition] = useState(0);
	const navRef = useRef([]);

	useEffect(() => {
		window.addEventListener("scroll", updateScroll);
		return () => {
			window.removeEventListener("scroll", updateScroll);
		};
	}, []);

	useEffect(() => {
		scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
		setNavIndex(null);
	}, [scrollRef, navIndex]);

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

	const renderNavMenu = () => {
		return NAV_MENU.map(({ idx, name }) => (
			<button
				key={idx}
				className={"menu-item"}
				ref={(ref) => (navRef.current[idx] = ref)}
				onClick={() => {
					setNavIndex(idx);
				}}
			>
				{name}
			</button>
		));
	};

	const renderMobileMenu = () => {
		return NAV_MENU.map(({ idx, name }) => (
			<button
				key={idx}
				className={"mobile-menu-item"}
				ref={(ref) => (navRef.current[idx] = ref)}
				onClick={() => {
					setNavIndex(idx);
				}}
			>
				{name}
			</button>
		));
	};

	return (
		<header className={cn("header", { hasBackground: scrollPosition > 100 })}>
			<div className="header-container">
				<div className="items left-side">
					<button className="logo">DaEun's Portfolio</button>
				</div>
				<div className="items right-side">
					<nav className="menu">{renderNavMenu()}</nav>
					<MenuButton open={open} toggleMenu={() => setOpen((prev) => !prev)} />
				</div>
			</div>

			<div className={cn("mobile-menu-wrapper", { isOpen: open })} onClick={() => setOpen((prev) => !prev)}>
				{renderMobileMenu()}
			</div>
		</header>
	);
}
