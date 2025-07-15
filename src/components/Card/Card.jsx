import "./Card.scss";

export default function Card({ img, title, subTitle }) {
	return (
		<div className="card">
			<img src={img} alt={title} />
			<div className="info">
				<div className="title">{title}</div>
				<span className="sub-title"> {subTitle} </span>
			</div>
		</div>
	);
}
