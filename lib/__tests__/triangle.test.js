const { text } = require("stream/consumers");
const Triangle = require("../triangle");

describe("Triangle", () => {
  describe("Initalization", () => {
    //Should initialize a triangle with a color and text color
    it("should initalize a triangle with a color and text color", () => {
      //Arrange
      //Act
      const triangle = new Triangle("blue", "green");
      //Asset
      expect(triangle).toBeInstanceOf(Triangle);
    });

    //Should have a background color and text color
    it("should contain a background color and text color", () => {
      //Arrange
      const backgroundColor = "red";
      const textColor = "blue";
      //Act
      const triangle = new Triangle(backgroundColor, textColor);
      //Asset
      expect(triangle.color).toBe(backgroundColor);
      expect(triangle.textColor).toBe(textColor);
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
      <polygon points="150, 18 244, 182 56, 182" fill="${backgroundColor}" />
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">SVG</text>
    </svg>`;
      //Act
      const triangle = new Triangle(backgroundColor, textColor);

      //Asset
      expect(triangle.generateSVG()).toBe(svgString);
    });
  });
});
