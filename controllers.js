const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let stopTimer =  setInterval(function(){
      let menit = Math.floor(seconds/60);
      let detik = seconds % 60;
      seconds--
      if(menit < 10 && detik < 10){
        displayCountdown(`0${menit} : 0${detik}`);
      }else if(menit < 10 && detik > 10){
        displayCountdown(`0${menit} : ${detik}`);
      }else if(menit > 10 && detik > 10){
        displayCountdown(`${menit} : ${detik}`);
      }else if(menit > 10 && detik < 10){
        displayCountdown(`${menit} : 0${detik}`);
      }else if(menit === 10){
        displayCountdown(`${menit} : 0${detik}`);
      }else if(menit < 10){
        displayCountdown(`0${menit} : ${detik}`);
      }else if(detik < 10){
        displayCountdown(`${menit} : ${detik}`);
      }else{
        displayCountdown(`${menit} : ${detik-1}`);
      }
      if(seconds < -1){
        //displayCountdown(`0${menit} : 0${detik}`);
        clearInterval(stopTimer);
        var clear = require('clear')
        clear()
      }
    },1000)
  }
// function Countdown(seconds){

// }
module.exports = {
  timer
};
