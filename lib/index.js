//Imports
const inquirer = require("inquirer");
// const shapes = require("./shapes");
const Square = require("./square");
const Triangle = require("./triangle");
const Circle = require("./circle");

const questions = [
  {
    type: "list",
    message: "What shape would you like?",
    name: "shape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    message: "What background color would you like?",
    name: "backgroundColor",
  },
  {
    type: "input",
    message: "What text color would you like?",
    name: "textColor",
  },
];

inquirer.prompt(questions).then((responses) => {
  if (responses.shape === "Square") {
    const squareSVG = new Square(
      responses.backgroundColor,
      responses.textColor
    );
    squareSVG.createSVG();
  } else if (responses.shape === "Circle") {
    const circuleSVG = new Circle(
      responses.backgroundColor,
      responses.textColor
    );
    circuleSVG.createSVG();
  } else if (responses.shape === "Triangle") {
    const triangleSVG = new Triangle(
      responses.backgroundColor,
      responses.textColor
    );
    triangleSVG.createSVG();
  }
});
