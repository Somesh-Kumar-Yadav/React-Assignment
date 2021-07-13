import React from "react";
const Clock =()=> {
	let [seconds, setSeconds] = React.useState(0);
	let [minutes, setMinutes] = React.useState(0);
	let [hours, setHours] = React.useState(0);
    let [show, setShow] = React.useState(true);

    const display = () => {
        setShow(!show);
    }
    const start = () => {
        setInterval(() => {
            seconds += 1;
        if (seconds === 60) {
            minutes += 1;
            seconds = 0;
            if (minutes === 60) {
                hours += 1;
                minutes = 0;
            }
            }
            
        setSeconds(seconds)
        setMinutes(minutes)
        setHours(hours)
        },1000)
        
    }
	
	return (
		<div className="App">
            {show&&<h3>{hours} : {minutes} : {seconds}</h3>}
            <button onClick={() => {
                start(0,0,0);
            }}>Start</button>
            <button onClick={() => {
                display();
            }}>{show?"Hide Clock":"Show Clock" }</button>
		</div>
	);
}
export { Clock };
