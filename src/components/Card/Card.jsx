import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ img, title, subTitle, desc, match }) {
	return (
		<Link className="card-continer" to={match}>
			<div className="image-area">
				<img src={img} alt={title} />
			</div>
			<div className="title">
				{title}
				<span className="sub-title"> / {subTitle} </span>
			</div>
			<div className="desc">{desc}</div>
		</Link>
	);
}
