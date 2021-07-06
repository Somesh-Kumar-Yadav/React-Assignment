import "./App.css";
import { Joinus } from "./Components/React-Intro/Assignment/React Menu/Joinus";
import { Settings } from "./Components/React-Intro/Assignment/React Menu/Settings";
import { Login } from "./Components/React-Intro/Assignment/React Menu/Login";
import { Contactus } from "./Components/React-Intro/Assignment/React Menu/Contactus";
import { Search } from "./Components/React-Intro/Assignment/React Menu/Search";
import { Help } from "./Components/React-Intro/Assignment/React Menu/Help";
import { Home } from "./Components/React-Intro/Assignment/React Menu/Home";
import { Download } from "./Components/React-Intro/Assignment/React Menu/Download";
import { Menu } from "./Components/React-Intro/Assignment/React Menu/Menu";

function App() {
	const arr = [
		"JOIN US",
		"SETTINGS",
		"LOGIN",
		"CONTACT US",
		"SEARCH",
		"HELP",
		"HOME",
		"DOWNLOAD",
	];
	return (
		<div className="App">
			<h2>REACT MENU PART-I</h2>
			<Joinus />
			<Settings />
			<Login />
			<Contactus />
			<Search />
			<Help />
			<Home />
			<Download />
			<h2>REACT MENU PART-II</h2>
			{arr.map((el) => {
				return <Menu menu={el} />;
			})}
		</div>
	);
}

export default App;
