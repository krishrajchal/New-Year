var text = document.getElementById("text");
var happyNewYear = document.getElementById("text2")
var confettiElemet = document.getElementById("confetti");
var confettiSettings = {target: confettiElemet};
var confetti = new ConfettiGenerator(confettiSettings);

var today = new Date();
var newYear = new Date(today.getFullYear() + 1, 0, 1);

function days_of_a_year(year) 
{
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function days_passed(dt) {
	var current = new Date(dt.getTime());
	var previous = new Date(dt.getFullYear(), 0, 1);
  
	return Math.ceil((current - previous + 1) / 86400000);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function setTime(confettiTime){
	var days = days_of_a_year(today.getFullYear()) - days_passed(today) + "d ";
	var hours = 24 - today.getHours() + "h ";
	var minutes = 60 - today.getMinutes() + "m ";
	var seconds = 60 - today.getSeconds() + "s";
	
	if(days == "0d " && hours == "0h " && minutes == "0m " && seconds == "0s"){
		confetti.render();
		happyNewYear.innerHTML = "Happy New Year!";
		sleep(confettiTime);
		confetti.clear();
	}else{
		happyNewYear.innerHTML = "";
	}

	text.innerHTML = days + hours + minutes + seconds;
	today = new Date();

	sleep(1000);

	setInterval(() => {
		setTime();
	}, 1000);
}

setTime(10000);