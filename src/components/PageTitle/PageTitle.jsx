import "./PageTitle.scss";

export default function PageTitle({ title }) {
	return (
		<div className="page-title">
			{title} <div className="bar" />
		</div>
	);
}
