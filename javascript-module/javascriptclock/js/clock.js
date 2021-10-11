/** @format */

const username = document.getElementById("myName");
username.innerHTML = prompt("Your name?", "Name");

let timer = setInterval(showTime, 1000);
function showTime() {
	let clock_time = new Date().toLocaleTimeString().substr(0, 7);
	let day = new Date().toLocaleString(window.navigator.language, { weekday: "long" });
	const clock = document.getElementById("myClock");
	clock.innerHTML = `${clock_time} ${day}`;
}
