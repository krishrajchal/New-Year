var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var happyNewYear = document.getElementById("text2")
var confettiElement = document.getElementById("confetti");
var confettiSettings = {target: confettiElement};
var confetti = new ConfettiGenerator(confettiSettings);

var today = new Date();
var newYear = new Date(today.getFullYear() + 1, 0, 1);
var confettiIsRaining = false;
var isNewYear = false;

function updateIsNewYear(){
	if(today - newYear == 0 || today.getDate() == newYear.getDate()){
		if(confettiIsRaining){
			return;
		}
		isNewYear = true;
		confettiIsRaining = true;
		text2.innerHTML = "";
		confetti.render();
		return;
	}
	isNewYear = false;
	confettiIsRaining = false;
	confetti.clear();
}

function updateClock(){
	//days 
	let days = Math.round(Math.abs(newYear.getTime() - today.getTime()) / 86400000);
	
	//hours 
	let hours = 23 - today.getHours(); 
	
	//minutes 
	let minutes = 59 - today.getMinutes();

	//seconds
	let seconds = 59 - today.getSeconds();

	text.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	
	console.log(new Date(2022, 11, 27).getDay());
	today = new Date();
}

setInterval(() =>{
	updateClock();
	updateIsNewYear();
}, 1000);
