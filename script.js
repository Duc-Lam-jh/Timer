function Timer(interval){
  const timer = document.getElementById('timer');
  const timeElapsed = new Date(0);
  let startingPoint = new Date();
  let start;

  function updateTimer(){
    timeElapsed.setTime(Date.now() - startingPoint);
    timer.innerHTML = timeElapsed.toUTCString().substring(20, 25);
  }

  return{
    startTimer: function(){
      start = setInterval(updateTimer, interval);
    },
    stopTimer: function(){
      clearInterval(start);
    },
    resetTimer: function(){
      startingPoint = new Date();
    }
  }

}

function StartTimer(){
  const timer = document.getElementById('timer');
  const startingoint = new Date(0);
  const startingPoint = new Date();

  console.log(startingPoint.toUTCString());
}

const timer = Timer(1000);
timer.startTimer();
