const inquirer = require("inquirer")
const fs = require("fs")
const {Triangle, Circle, Square} = require("./lib/shapes.js")

const questions = [
    {
        type: "input",
        message: "What text do you want in your shape? (Up to 3 characters)",
        name: "text",
    },
    {
        type: "input",
        message: "What color do you want your text to be?",
        name: "textColor",
    },
    {
        type: "list",
        message: "What shape do you want your logo to be?",
        name: "shape",
        choices: ["Circle","Square","Triangle"],
    },
    {
        type: "input",
        message: "What color do you want your shape to be?",
        name: "shapeColor",
    },
];


function init() {
    inquirer.prompt(questions).then(function (answers) {
      let shape;
      switch (answers.shape) {
        case "Square":
          shape = new Square(answers.text, answers.textColor, answers.shape, answers.shapeColor);
          break;
        case "Circle":
          shape = new Circle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
          break;
        case "Triangle":
          shape = new Triangle(answers.text, answers.textColor, answers.shape, answers.shapeColor);
          break;
      }
      const svgCode = shape.render();
      fs.writeFile("logo.svg", svgCode, (err) => {
        if (err) throw err;
        console.log("Logo saved to logo.svg");
      });
    });
  }
  



init();