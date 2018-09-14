const { timer } = require("./controllers.js");

const main = function() {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds);
};

main();
