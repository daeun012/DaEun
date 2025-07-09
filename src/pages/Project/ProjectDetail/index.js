import { Route, Routes } from "react-router-dom";
import FunBun from "./FunBun";
import Humechanic from "./Humechanic";
import Portfolio from "./Portfolio";
import LabelImage from "./LabelImage";

export default function ProjectDetail() {
	return (
		<div className="container-detail">
			<Routes>
				<Route path="FunBun" element={<FunBun />} />
				<Route path="Humechanic" element={<Humechanic />} />
				<Route path="Portfolio" element={<Portfolio />} />
				<Route path="LabelImage" element={<LabelImage />} />
			</Routes>
		</div>
	);
}
