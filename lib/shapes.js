const fs = require("fs");

class Shapes {
  constructor(color, textColor) {
    this.color = color;
    this.textColor = textColor;
  }

  writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  }
}

module.exports = Shapes;
