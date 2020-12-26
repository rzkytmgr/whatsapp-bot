const chalk = require("chalk");

module.exports = (color, text) => {
  switch (color) {
    case "blue":
      return chalk.bold.blueBright(text);
    case "red":
      return chalk.bold.redBright(text);
    case "green":
      return chalk.bold.greenBright(text);
    case "yellow":
      return chalk.bold.yellowBright(text);
    default:
      return chalk.whiteBright(text);
  }
};
