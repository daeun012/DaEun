export default function Delivery() {
	const img = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16"];

	return (
		<div className="detail-container-with-img">
			{img.map((name, index) => (
				<img key={index} src={`${process.env.PUBLIC_URL}/images/delivery/${name}.png`} alt={`${name}`} />
			))}
		</div>
	);
}
