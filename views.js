const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let minute = Math.floor(seconds / 60)
  let second = seconds%60
  if(minute < 10){
    var minuteFormat = `0${minute}`    
    if (second < 10){
      var secondFormat = `0${second}`
    } else {
      secondFormat = second
    }
  } else {
    minuteFormat = minute
  }
  
  console.log(`${minuteFormat}:${secondFormat}`)
};

module.exports = { displayCountdown };
