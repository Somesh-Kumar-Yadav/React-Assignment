import "./Counter.css";
import React from "react";
function Counter() {
	let [counter, setcounter] = React.useState(10);
	const add = (num) => {
		counter += num;
		if (counter > 15) {
			setcounter(10);
			return;
		} else if (counter < 5) {
			setcounter(10);
			return;
		}
		setcounter(counter);
	};
	return (
		<div className="counter">
			<h1>{counter}</h1>
			<button
				onClick={() => {
					add(1);
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					add(-1);
				}}
			>
				Subtract
			</button>
		</div>
	);
}
// Always use PascalCase for file and components and files names
export { Counter };
