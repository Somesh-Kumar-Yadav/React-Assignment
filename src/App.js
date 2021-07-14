import React from "react";
import "./App.css";
import { Todos } from "./Components/React-UseEffect/Todos/Todos";
function App() {
	const [formData, setFormData] = React.useState({});
	const HandleChange = (e) => {
		const { value, name, checked, type } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
	};
	const GetData = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<div className="App">
			<Todos />
			{/* <form onSubmit={GetData}>
				<label htmlFor="name">
					NAME:
					<input
						onChange={HandleChange}
						type="text"
						name="name"
						placeholder="Enter your name"
					></input>
				</label>
				<label htmlFor="isMarried">
					isMarried:
					<input
						onChange={HandleChange}
						type="checkbox"
						name="isMarried"
						placeholder="Enter your name"
					></input>
					<input onChange={HandleChange} type="submit"></input>
				</label>
			</form> */}
		</div>
	);
}

export default App;
