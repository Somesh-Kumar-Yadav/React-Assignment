import "./Counter.css";
import React from "react";
const Counter =()=> {
	const [counter, setCounter] = React.useState(0);
	React.useEffect(() => {
			console.log("mounting");
			const clearValue=setInterval(()=> {
				setCounter((preValue) => {
					console.log("updating");
					if (preValue === 10) {
						clearInterval(clearValue)
						return 0;
					}
					return preValue + 1;
				});
			}, 1000);
			return () => {
				console.log("cleaning")
				clearInterval(clearValue);
			}
		},[])
	
	return (
		<div className="App">
			<h3>Counter: {counter}</h3>
			
		</div>
	);
}
// Always use PascalCase for file and components and files names
export { Counter };
