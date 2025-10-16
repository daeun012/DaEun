export default function CatchTable() {
	const img = Array.from({ length: 18 }, (n, i) => String(i + 1).padStart(2, "0"));

	return (
		<div className="detail-container-with-img">
			{img.map((name, index) => (
				<img key={index} src={`${process.env.PUBLIC_URL}/images/catch-table/${name}.png`} alt={`${name}`} />
			))}
		</div>
	);
}
