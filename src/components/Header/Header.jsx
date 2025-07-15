import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import MenuButton from "./menuButton/MenuButton";

const NAV_MENU = [
	{ idx: 0, name: "About" },
	{ idx: 1, name: "Project" },
	{ idx: 2, name: "Career" },
];

export default function Header({ scrollRef }) {
	const [open, setOpen] = useState(false);
	const [navIndex, setNavIndex] = useState(null);
	const navRef = useRef([]); // 이동할 각각의 컴포넌트에 대응하는 목차 버튼을 저장할 ref 배열

	useEffect(() => {
		// { behavior: 'smooth' } 속성을 주면 스크롤이 스르륵~ 올라가거나 내려가면서 이동하고, 없으면 아무 애니메이션 없이 바로 목적지를 보여준다.
		scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });
		setNavIndex(null);
	}, [scrollRef, navIndex]);

	// 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
	useEffect(() => {
		const changeNavBtnStyle = () => {
			scrollRef.current.forEach((ref, idx) => {
				if (ref.offsetTop - 180 < window.scrollY) {
					navRef.current.forEach((ref) => {
						ref.className = ref.className.replace(" active", "");
					});

					navRef.current[idx].className += " active";
				}
			});
		};

		window.addEventListener("scroll", changeNavBtnStyle);

		return () => {
			window.removeEventListener("scroll", changeNavBtnStyle);
		};
	}, [scrollRef]);

	return (
		<header className="header">
			<div className="container">
				<div className="items left-side">
					<button className="logo">DaEun's Portfolio</button>
				</div>
				<div className="items right-side">
					<nav className="menu">
						{NAV_MENU.map(({ idx, name }) => (
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
						))}
					</nav>
					<MenuButton open={open} toggleMenu={() => setOpen((prev) => !prev)} />
				</div>
			</div>

			<div className={cn("mobile-menu-wrapper", { isOpen: open })} onClick={() => setOpen((prev) => !prev)}>
				{NAV_MENU.map(({ idx, name }) => (
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
				))}
			</div>
		</header>
	);
}
