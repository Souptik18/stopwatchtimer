// Variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

// DOM Elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// Event listeners
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);

// Functions
function startStopwatch() {
  interval = setInterval(incrementTimer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function incrementTimer() {
  seconds++;
  
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  
  displayTime();
}

function stopStopwatch() {
  clearInterval(interval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime();
  startButton.disabled = false;
  stopButton.disabled = false;
}

function displayTime() {
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, "0");// "0".padStart()
}
