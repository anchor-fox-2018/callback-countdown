const { displayCountdown } = require("./views");

const timer = seconds => {
  let detik = setInterval(function(){
    displayCountdown(seconds)
    seconds--
    if(seconds < 0){
      clearInterval(detik)
    }
  }, 1000)
};

module.exports = {
  timer
};
