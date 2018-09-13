const { displayCountdown } = require("./views");
const clear = require("clear");

function timer(seconds) {
  let time = setInterval(function() {
    displayCountdown(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(time);
    }
  }, 1000)
};

module.exports = {
  timer
};
