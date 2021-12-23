import Timer from "./timer.js";

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

function getRandomQuestion(questions) {
  questionNumber = Math.floor(Math.random() * questions.length);
  return questions[questionNumber].question;
}

function showQuestion() {
  showElement('interactive-section');
  document.getElementById('question').innerHTML = getRandomQuestion(questions);
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
  if (!isElementActive('interactive-section')) {
    return;
  }
  const answer = document.getElementById('answer').value;
  const result = checkAnswer(answer);
  if (result) {
    alert('Bạn đã trả lời đúng!');
  } else {
    alert('Bạn đã trả lời sai!');
  }
  resetAnswer();
}

function resetAnswer(){
  hideElement('interactive-section');
  document.getElementById('answer').value = '';
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  if (element.classList.contains('active')) {
    return
  }
  element.classList.remove('inactive');
  element.classList.add('active');
}

function hideElement(elementId) {
  const element = document.getElementById(elementId);
  if (element.classList.contains('inactive')) {
    return
  }
  element.classList.remove('active');
  element.classList.add('inactive');
}

function isElementActive(elementId) {
  const element = document.getElementById(elementId);
  if (element.classList.contains('active')) {
    return true;
  }
  return false;
}

const timer = Timer(1000, {
  containerId: 'timer-container',
  timerId: 'timer',
  startButtonId: 'start-button',
  stopButtonId: 'stop-button',
  resetButtonId: 'reset-button'
});
timer.setUpTimerButtons();

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function () { showQuestion() });

const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', function () { alertResult() });

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () { resetAnswer() });