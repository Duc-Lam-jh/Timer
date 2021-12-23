/**
 * A function to create and initialize a timer starting at 00:00
 * 
 * @param {*} interval interval between each tick of the timer
 * @param {*} options specify the ids of the elemnts that make up the timer: {containerId, timerId, startButtonId, stopButtonId, resetButtonId}
 * @returns setUpTimerButtons(): a function to set up the buttons of the timer
 */
function Timer(interval, { }) {
  const timerContainerId = arguments[1].containerId ? arguments[1].containerId : 'container';
  const timerId = arguments[1].timerId ? arguments[1].timerId : 'timer';
  const startButtonId = arguments[1].startButtonId ? arguments[1].startButtonId : 'start-button';
  const stopButtonId = arguments[1].stopButtonId ? arguments[1].stopButtonId : 'stop-button';
  const resetButtonId = arguments[1].resetButtonId ? arguments[1].resetButtonId : 'reset-button';
  
  const timerContainer = document.getElementById(timerContainerId) ? document.getElementById(timerContainerId) : 'container';
  const timer = timerContainer.querySelector('#' + timerId);

  let timeElapsed = new Date(0);
  let startingPoint = new Date();
  let start;

  function setUpTimerButtons() {
    const startButton = timerContainer.querySelector('#' + startButtonId);
    startButton.addEventListener('click', startTimer);
    
    const stopButton = timerContainer.querySelector('#' + stopButtonId);
    stopButton.addEventListener('click', stopTimer);

    const resetButton = timerContainer.querySelector('#' + resetButtonId);
    resetButton.addEventListener('click', resetTimer);
  }

  function updateTimer() {
    timeElapsed.setTime(Date.now() - startingPoint);
    timer.innerHTML = timeElapsed.toUTCString().substring(20, 25);
  } 

  function startTimer() {
    if(start) {
      clearInterval(start);
    } else {
      //do nothing
    }
    resetTimer();
    start = setInterval(updateTimer, interval);
  }

  function stopTimer() {
    if(start) {
      clearInterval(start);
    } else {
      //do nothing
    }
  }

  function resetTimer() {
    stopTimer();
    timeElapsed = new Date(0);
    startingPoint = new Date();
    timer.innerHTML = '00:00';
  }

  return{
    setUpTimerButtons,
  }

}

export default Timer;