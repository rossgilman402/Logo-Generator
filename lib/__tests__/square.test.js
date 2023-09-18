const { text } = require("stream/consumers");
const Square = require("../square");

describe("Square", () => {
  describe("Initalization", () => {
    //Should initialize a square with a color and text color
    it("should initalize a square with a color and text color", () => {
      //Arrange
      //Act
      const square = new Square("blue", "green");
      //Asset
      expect(square).toBeInstanceOf(Square);
    });

    //Should have a background color and text color
    it("should contain a background color and text color", () => {
      //Arrange
      const backgroundColor = "red";
      const textColor = "blue";
      //Act
      const square = new Square(backgroundColor, textColor);
      //Asset
      expect(square.color).toBe(backgroundColor);
      expect(square.textColor).toBe(textColor);
    });
  });

  describe("GenerateSVG", () => {
    //Should return the svgFile code
    it("should return the svgFile code", () => {
      //Arrange
      const backgroundColor = "red";
      const textColor = "blue";
      const svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="100" fill="${backgroundColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
    </svg>`;
      //Act
      const square = new Square(backgroundColor, textColor);

      //Asset
      expect(square.generateSVG()).toBe(svgString);
    });
  });
});
