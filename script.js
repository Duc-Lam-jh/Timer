function Timer(interval, container){
  const timerContainer = document.getElementById(container);
  const timer = timerContainer.querySelector('#timer');
  let timeElapsed = new Date(0);
  let startingPoint = new Date();
  let start;

  function updateTimer(){
    timeElapsed.setTime(Date.now() - startingPoint);
    timer.innerHTML = timeElapsed.toUTCString().substring(20, 25);
  }

  function setUpTimerButtons(){
    const startButton = timerContainer.querySelector('#start-button');
    const stopButton = timerContainer.querySelector('#stop-button');

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
  }

  function startTimer() {
    resetTimer();
    start = setInterval(updateTimer, interval);
  }

  function stopTimer() {
    clearInterval(start);
  }

  function resetTimer() {
    timeElapsed = new Date(0);
    startingPoint = new Date();
  }

  return{
    setUpTimerButtons,
  }

}

const timer = Timer(1000, 'timer-container');
timer.setUpTimerButtons();
