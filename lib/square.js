const Shapes = require("./shapes");

class Square extends Shapes {
  constructor(color, textColor) {
    super(color, textColor);
  }

  //Will return the data to
  generateSVG() {
    const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="150" height="100" fill="${super.color}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      super.textColor
    }">SVG</text>
  
</svg>`;
    return svgFile;
  }

  createSVG() {
    super.writeFile("square.svg", this.generateSVG());
  }
}

module.exports = Square;
