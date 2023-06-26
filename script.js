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
// adding all the eventlistner to have the function working when the mouse click's it
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);

// Functions
function startStopwatch() {
  interval = setInterval(incrementTimer, 1000); // set interval runs everytime 
  startButton.disabled = true;
  stopButton.disabled = false;
}

function incrementTimer() {
  seconds++; // works until it reaches 60 and then resets to 0
  
  if (seconds === 60) {
    seconds = 0; // second reset to  0
    minutes++; // minutes incremented to 1
    
    if (minutes === 60) {
      minutes = 0; // minutes updated to 0 when minutes reaches to 59
      hours++; // hours is increased by 1
    }
  }
  
  displayTime(); //It updates the text content of the `hoursElement`, `minutesElement`, and `secondsElement` elements with the formatted time values obtained from the `formatTime` function.
}

function stopStopwatch() {
  clearInterval(interval);
  startButton.disabled = false; // enables the start button 
  stopButton.disabled = true; // when start button is clicked stop button is disabled
}

function resetStopwatch() {
  clearInterval(interval); // clear interval stops the function execution started by set interval function
  hours = 0; 
  minutes = 0;
  seconds = 0;
  displayTime();
  startButton.disabled = false; // when reset button is clicked then the start and stop button is enabled to enable the user to start the timer if needed
  stopButton.disabled = false;
}

function displayTime() {
  hoursElement.textContent = formatTime(hours); // updates the hours , minutes and seconds places with the formatted textcontent 
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, "0"); // The `padStart` function adds leading zeros (using the padding character "0") if necessary.
}
