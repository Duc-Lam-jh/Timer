/**
 * A function to create and initialize a timer starting at 00:00
 * 
 * @param {*} interval interval between each tick of the timer
 * @param {*} options specify the ids of the elements that make up the timer
 * @returns setUpTimerButtons(): a function to set up the buttons of the timer
 */
function Timer(interval, options = { 
  containerId,
  timerId,
  startButtonId,
  stopButtonId,
  resetButtonId}) {
  const timerContainerId = options.containerId ? options.containerId : 'container';
  const timerId = options.timerId ? options.timerId : 'timer';
  const startButtonId = options.startButtonId ? options.startButtonId : 'start-button';
  const stopButtonId = options.stopButtonId ? options.stopButtonId : 'stop-button';
  const resetButtonId = options.resetButtonId ? options.resetButtonId : 'reset-button';
  
  const timerContainer = document.getElementById(timerContainerId);
  const timer = timerContainer.querySelector('#' + timerId);

  let timerStartingTime;
  let isTimerRunning;

  const setUpTimerButtons = () => {
    timerContainer.querySelector('#' + startButtonId).addEventListener('click', startTimer);
    
    timerContainer.querySelector('#' + stopButtonId).addEventListener('click', stopTimer);

    timerContainer.querySelector('#' + resetButtonId).addEventListener('click', resetTimer);
  }

  // const setUpTimerButtons = () => {
  //   const startButton = timerContainer.querySelector('#' + startButtonId);
  //   startButton.addEventListener('click', startTimer);
    
  //   const stopButton = timerContainer.querySelector('#' + stopButtonId);
  //   stopButton.addEventListener('click', stopTimer);

  //   const resetButton = timerContainer.querySelector('#' + resetButtonId);
  //   resetButton.addEventListener('click', resetTimer);
  // }

  const updateTimer = () => {
    const timeElapsedSinceStart = new Date(Date.now() - timerStartingTime);
    timer.innerHTML = timeElapsedSinceStart.toString().substring(19, 24);
  } 

  const startTimer = () => {
    if(isTimerRunning) {
      clearInterval(isTimerRunning);
    }
    resetTimer();
    isTimerRunning = setInterval(updateTimer, interval);
  }

  const stopTimer = () => {
    if(isTimerRunning) {
      clearInterval(isTimerRunning);
    }
  }

  const resetTimer = () => {
    stopTimer();
    timerStartingTime = new Date();
    timer.innerHTML = '00:00';
  }

  return{
    setUpTimerButtons,
  }
}

export default Timer;