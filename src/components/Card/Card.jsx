import "./Card.scss";

export default function Card({ imgSrc, title, date }) {
	return (
		<div className="card">
			<img src={imgSrc} alt={title} />
			<div className="info">
				<div className="title">{title}</div>
				<span className="date"> {date} </span>
			</div>
		</div>
	);
}
