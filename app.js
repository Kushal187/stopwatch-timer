let value = document.querySelector(".value");
let lapRecord = document.querySelector(".lapRecord");
let hours = 0;
let minutes = 0;
let seconds = 0;
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let stopBtn = document.querySelector(".stop");
let lapBtn = document.querySelector(".lap");
let secondsInterval = 0;
let minutesInterval = 0;
let hoursInterval = 0;
// var to hold set interval function
let interval = null;

//var to set status of setInterval() function

let status = "stopped";

//var to intialise lap
let lapNow = null;

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  //to add zero when value is less than 10
  if (seconds < 10) {
    secondsInterval = "0" + seconds.toString();
  } else {
    secondsInterval = seconds;
  }
  if (minutes < 10) {
    minutesInterval = "0" + minutes.toString();
  } else {
    minutesInterval = minutes;
  }
  if (hours < 10) {
    hoursInterval = "0" + hours.toString();
  } else {
    hoursInterval = hours;
  }

  value.innerHTML =
    hoursInterval + ":" + minutesInterval + ":" + secondsInterval;
  setInterval(stopwatch, 1000);
}
// setInterval(stopWatch, 1000);

function start() {
  if (status === "stopped") {
    interval = setInterval(stopWatch, 1000);
    status = "started";
  }
}
function stop() {
  if (status === "started") {
    clearInterval(interval);
    status = "stopped";
  }
}
function reset() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  value.innerHTML = "00:00:00";
  lapRecord.innerHTML = "";
}

function lap() {
  lapNow = `<div class="lap"> ${hoursInterval} : ${minutesInterval} : ${secondsInterval}</div>`;
  lapRecord.innerHTML += lapNow;
}
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
