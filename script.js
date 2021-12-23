/* ======== Data ======== */
const questions = [
  {
    question: 'What is the color theme of this page?',
    answer: 'blue'
  },
  {
    question: 'What is 4 + 4? (answer in number)',
    answer: '8'
  },
  {
    question: 'What is 4 x 4? (answer in number)',
    answer: '16'
  },
  {
    question: 'What is 2 + 4? (answer in number)',
    answer: '6'
  },
  {
    question: 'What is 2 + 10? (answer in number)',
    answer: '12'
  },
  {
    question: 'What is 4 : 4? (answer in number)',
    answer: '1'
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
let questionNumber = 0;

/* ======== Functions ======== */
function Timer(interval, container) {
  const timerContainer = document.getElementById(container);
  const timer = timerContainer.querySelector('#timer');
  let timeElapsed = new Date(0);
  let startingPoint = new Date();
  let start;

  function setUpTimerButtons() {
    const startButton = timerContainer.querySelector('#start-button');
    const stopButton = timerContainer.querySelector('#stop-button');

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
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

function getRandomQuestion(questions) {
  showElement('interactive-section');
  questionNumber = Math.floor(Math.random() * questions.length);
  document.getElementById('question').innerHTML = questions[questionNumber].question;
}

function checkAnswer(answer) {
  const rightAnswer = questions[questionNumber].answer;
  answer = answer.toLowerCase();
  if (answer === rightAnswer) {
    return true;
  }
  return false;
}

function alertResult() {
  if(!isElementActive('interactive-section')) {
    return;
  }
  const answer = document.getElementById('answer').value;
  const result = checkAnswer(answer);
  if (result){
    alert('Bạn đã trả lời đúng!');
  } else {
    alert('Bạn đã trả lời sai!');
  }
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  if(element.classList.contains('active')) {
    return
  }
  element.classList.remove('inactive');
  element.classList.add('active');
}

function isElementActive(elementId){
  const element = document.getElementById(elementId);
  if(element.classList.contains('active')) {
    return true;
  }
 return false;
}

/* ======== Execution ======== */
const timer = Timer(1000, 'timer-container');
timer.setUpTimerButtons();

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function() { getRandomQuestion(questions) });

const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', function() { alertResult() });