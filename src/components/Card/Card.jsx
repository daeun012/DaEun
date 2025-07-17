import "./Card.scss";

export default function Card({ id, imgSrc, title, date, onOpenModal, onProjectIdChange }) {
	const handleClick = () => {
		onProjectIdChange(id);
		onOpenModal();
	};

	return (
		<div className="card" onClick={handleClick}>
			<img src={imgSrc} alt={title} />
			<div className="info">
				<div className="title">{title}</div>
				<span className="date"> {date} </span>
			</div>
		</div>
	);
}
