// script.js

let timerDisplay = document.getElementById('timer');
let startPauseBtn = document.getElementById('startPauseBtn');
let resetBtn = document.getElementById('resetBtn');

let elapsedTime = 0; // Time in milliseconds
let intervalId = null;
let isRunning = false;

function updateDisplay() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); // Only show 2 digits of milliseconds

    timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}.` +
        `${String(milliseconds).padStart(2, '0')}`;
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        startPauseBtn.textContent = 'Start';
    } else {
        let startTime = Date.now() - elapsedTime;
        intervalId = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10); // Update every 10ms for smooth display
        startPauseBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(intervalId);
    elapsedTime = 0;
    isRunning = false;
    updateDisplay();
    startPauseBtn.textContent = 'Start';
}

// Event Listeners
startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
