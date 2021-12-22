const Timer = () => {
  minute = 0;
  second = 0;

  return{
    getTime: function(){ return minute + ':' + second };
  }
}

function StartTimer(){
  timer = document.getElementById('timer')
}