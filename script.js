let start = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');
let stopwatch = document.getElementById('stopwatch')

let hours = 0;
let minutes = 0;
let secounds = 0;
let isStarted = true;
let stop_interval;


restart.addEventListener('click', function() {
	hours = 0;
	minutes = 0;
	secounds = 0;
	clearInterval(stop_interval);
	show();
});

stop.addEventListener('click', function () {
	clearInterval(stop_interval);
	isStarted = true;
})

start.addEventListener('click', function () {
	if (isStarted) {
		startInterval();
		isStarted = false;
	}
})

function startInterval () {
	stop_interval = setInterval(() => {
		if (secounds === 59) {
			secounds = 0;
			++minutes;
		}
		if (minutes == 59) {
			minutes = 0;
			++hours;
		}
		show();
		++secounds;
	}, 1000);
}

function show () {
	stopwatch.innerHTML = `${hours <= 9 ? '0' + hours : hours} : ${minutes <= 9 ? '0' + minutes : minutes} : ${secounds  <= 9 ? '0' + secounds : secounds}`
}