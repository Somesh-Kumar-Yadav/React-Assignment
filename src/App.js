import React from "react";
import "./App.css";
import { ReactPaymentCard } from "./Components/React-States Styling/Assignment/ReactPaymentCard";

function App() {
	return (
		<div className="App">
			<ReactPaymentCard
				color={"#f5f5f5"}
				heading={"Apple Gift"}
				subheading={"Payment"}
				devices={"MacOS - Mobile"}
				date={"17 Sept 2020"}
				logo={`https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg`}
			/>
			<ReactPaymentCard
				color={"#FFA500"}
				heading={"Amazon Gift"}
				subheading={"Pay"}
				devices={"Desktop - Mobile"}
				date={"17/07/2020"}
				logo={`https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg`}
			/>
		</div>
	);
}

export default App;
