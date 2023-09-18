const { text } = require("stream/consumers");
const Shape = require("../shapes");

describe("Shapes", () => {
  //Should initialize a shape with a color and text color
  it("should initalize a shape with a color and text color", () => {
    //Arrange
    //Act
    const shape = new Shape("blue", "green");
    //Asset
    expect(shape).toBeInstanceOf(Shape);
  });

  //Should have a background color and text color
  it("should contain a background color and text color", () => {
    //Arrange
    const backgroundColor = "red";
    const textColor = "blue";
    //Act
    const shape = new Shape(backgroundColor, textColor);
    //Asset
    expect(shape.color).toBe(backgroundColor);
    expect(shape.textColor).toBe(textColor);
  });
});
