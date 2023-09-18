const { text } = require("stream/consumers");
const Circle = require("../circle.js");

describe("Circle", () => {
  describe("Initalization", () => {
    //Should initialize a circle with a color and text color
    it("should initalize a circle with a color and text color", () => {
      //Arrange
      //Act
      const circle = new Circle("blue", "green");
      //Asset
      expect(circle).toBeInstanceOf(Circle);
    });

    //Should have a background color and text color
    it("should contain a background color and text color", () => {
      //Arrange
      const backgroundColor = "red";
      const textColor = "blue";
      //Act
      const circle = new Circle(backgroundColor, textColor);
      //Asset
      expect(circle.color).toBe(backgroundColor);
      expect(circle.textColor).toBe(textColor);
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
            <circle cx="150" cy="100" r="80" fill="${backgroundColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
        </svg>`;
      //Act
      const circle = new Circle(backgroundColor, textColor);

      //Asset
      expect(circle.generateSVG()).toBe(svgString);
    });
  });
});
