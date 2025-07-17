import "./Card.scss";

export default function Card({ imgSrc, title, date, onClick }) {
	return (
		<div className="card" onClick={onClick}>
			<img src={imgSrc} alt={title} />
			<div className="info">
				<div className="title">{title}</div>
				<span className="date"> {date} </span>
			</div>
		</div>
	);
}
