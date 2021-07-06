import "./Counter.css";
function Counter({ c }) {
	return (
		<div className="redText">
			<h1>{c * c * c}</h1>
		</div>
	);
}
// Always use PascalCase for file and components and files names
export { Counter };
