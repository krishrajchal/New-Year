var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var happyNewYear = document.getElementById("text2")
var confettiElement = document.getElementById("confetti");
var confettiSettings = {target: confettiElement};
var confetti = new ConfettiGenerator(confettiSettings);

var confettiIsRaining = false;
var isNewYear = false;

var today = new Date();
	var target = new Date("January 1, 2024 00:00:00");
	var currentTime = today.getTime();
	var targetTime = target.getTime();
	
	var time = targetTime - currentTime;
	
	var sec = Math.floor(time/1000);
	var min = Math.floor(sec/60);
	var hrs = Math.floor(min/60);
	var days = Math.floor(hrs/24);
	
	hrs = hrs % 24;
	min = min % 60;
	sec = sec % 60;
	
	
	hrs = (hrs<10) ? "0"+hrs : hrs;
	min = (min<10) ? "0"+min : min;
	sec = (sec<10) ? "0"+sec : sec;
	
	text.innerHTML = `${days}d ${hrs}h ${min}m ${sec}s`;
	
	if(time > 0){
		setTimeout(startCountDown, 1000);
	}else{
		endCountDown();
	}
}

function endCountDown(){
	document.title = "HAPPY NEW YEAR!";
	text.innerHTML = "0d 0h 0m 0s"
	isNewYear = true;
        confettiIsRaining = true;
        text2.innerHTML = "";
        confetti.render();
}
