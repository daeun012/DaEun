import { useRef } from "react";
import Header from "./components/header/Header";
import Main from "./pages/Main";

export default function App() {
	const scrollRef = useRef([]);

	return (
		<>
			<Header scrollRef={scrollRef} />
			<Main scrollRef={scrollRef} />
		</>
	);
}
