var mySeconds;
var intervalHandle = null;
let status = "stopped";
var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");
var timeDisplay = document.querySelector(".value");

function tick() {
  var timeDisplay = document.querySelector(".value");

  var min = Math.floor(mySeconds / 60);
  var sec = mySeconds - min * 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;

  timeDisplay.innerHTML = message;

  if (mySeconds === 0) {
    alert("Done");
    clearInterval(intervalHandle);
    // resetPage();
  }
  mySeconds--;
}

function startCounter() {
  var myInput = document.getElementById("time").value;
  if (isNaN(myInput)) {
    alert("Type a valid number please");
    return;
  }
  mySeconds = myInput * 60;
  if (status === "stopped") {
    intervalHandle = setInterval(tick, 1000);
    status = "started";
  }

  //   document.getElementById("inputArea").style.display = "none";
}
function stop() {
  if (status === "started") {
    clearInterval(intervalHandle);
    status = "stopped";
    intervalHandle = null;
  }
}

function reset() {
  clearInterval(intervalHandle);
  timeDisplay.innerHTML = "00:00";
  document.querySelector("input").value = "";
}
startBtn.addEventListener("click", startCounter);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
