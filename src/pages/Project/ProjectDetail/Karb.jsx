export default function Karb() {
	const img = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];

	return (
		<div className="project-detail-with-img">
			{img.map((name, index) => (
				<img key={index} src={`${process.env.PUBLIC_URL}/images/karb/${name}.png`} alt={`${name}`} />
			))}
		</div>
	);
}
