const Shapes = require("./shapes");

class Triangle extends Shapes {
  constructor(color, textColor) {
    super(color, textColor);
  }

  //This function will generate the proper SVG file
  generateSVG() {
    const svgFile = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">SVG</text>
    </svg>`;
    return svgFile;
  }

  //This function will create the SVG file by calling the generateSVG function
  createSVG() {
    super.writeFile("logo.svg", this.generateSVG());
  }
}

module.exports = Triangle;
