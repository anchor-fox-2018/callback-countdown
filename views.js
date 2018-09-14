const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = function (seconds) {
  clear();
  let second = Math.floor(seconds % 60);
  let minute = Math.floor(seconds / 60);
  console.log(chalk.red(figlet.textSync("Countdown App")));
  // Your code here...
  if (minute < 10 && second < 10) {
    console.log(chalk.blue(figlet.textSync(`0${minute}:0${second}`)));
  } else if (minute < 10 && second > 10) {
    console.log(chalk.blue(figlet.textSync(`0${minute}:${second}`)));
  }
  else if (minute > 10 && second < 10) {
    console.log(chalk.blue(figlet.textSync(`${minute}:0${second}`)));
  }
  else if (minute > 10 && second > 10) {
    console.log(chalk.blue(figlet.textSync(`${minute}:${second}`)));
  }
};

module.exports = { displayCountdown };
