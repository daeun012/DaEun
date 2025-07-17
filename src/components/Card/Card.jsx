import "./Card.scss";

export default function Card({ imgSrc, title, date, desc, onClick }) {
	return (
		<div className="card" onClick={onClick}>
			<img src={imgSrc} alt={title} />
			<div className="info">
				<div className="title">{title}</div>
				<span className="date"> {date} </span>
				<div className="desc">{desc}</div>
			</div>
		</div>
	);
}
