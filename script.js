/* ======== Data ======== */
const questions = [
  {
    question: 'What is the color theme of this page?',
    answer: 'blue'
  },
  {
    question: 'What is 4 + 4?',
    answer: '8'
  },
  {
    question: 'What country is Hanoi in?',
    answer: 'vietnam'
  },
  {
    question: 'Who is the writer of Easy On Me?',
    answer: 'adele'
  }
]

/* ======== Functions ======== */
function Timer(interval, container){
  const timerContainer = document.getElementById(container);
  const timer = timerContainer.querySelector('#timer');
  let timeElapsed = new Date(0);
  let startingPoint = new Date();
  let start;

  function setUpTimerButtons(){
    const startButton = timerContainer.querySelector('#start-button');
    const stopButton = timerContainer.querySelector('#stop-button');

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
  }

  function updateTimer(){
    timeElapsed.setTime(Date.now() - startingPoint);
    timer.innerHTML = timeElapsed.toUTCString().substring(20, 25);
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

function getRandomQuestion(data){
  const questionNumber = Math.floor(Math.random() * data.length);
  document.getElementById('question').innerHTML = data[questionNumber].question;
}


/* ======== Execution ======== */
const timer = Timer(1000, 'timer-container');
timer.setUpTimerButtons();

getRandomQuestion(questions);
