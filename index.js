//Imports the two NPMs
const inquirer = require("inquirer");
const jest = require("jest");


const fs = require("fs");

//Imports classes to from shapes.js
const shapes = require("./lib/shapes");


// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    let logoSvg = "";
    logoSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    logoSvg += "<g>";
    logoSvg += `${answers.shapeChoice}`;
    
let Choice;
if (answers.shape === "Circle"){
    Choice = new Circle();
    logoSvg += '<circle cx="25" cy="75" r="20" fill="${answers.shapeColor}"/>'
    
} else if (answers.shape === "Square") {
    Choice = new Square();
    logoSvg += '<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${answers.shapeColor}"/>'

} else if (answers.shape === "Triangle") {
    Choice = new Triangle();
    logoSvg += '<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>'
}
 // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
 logoSvg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
 // Closing </g> tag
 logoSvg += "</g>";
 // Closing </svg> tag
 logoSvg += "</svg>";

 // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
 fs.writeFile(fileName, logoSvg, (err) => {
   err ? console.log(err) : console.log("Generated logo.svg");
 });
}


// // Function call to initialize app
function AskTheManz() {
    inquirer
      .prompt([
        // Text prompt
        {
          type: "input",
          message:
            "What would you like your logo to say?",
          name: "text",
        },
        // Text color prompt
        {
          type: "input",
          message:
            "Choose a color to make your text (Enter a Hex value like #0000FF)",
          name: "textColor",
        },
        // Shape choice prompt
        {
          type: "list",
          message: "Choose one of the following shapes?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shapeChoice",
        },
        // Shape color prompt
        {
          type: "input",
          message:
            "Pick a color for your logo (Enter a Hex value like  #0000FF)",
          name: "shapeColor",
        },
      ])
      .then((answers) => {writeToFile("logo.svg", answers);})
    }
  
  //Calls the function AskTheManz so the prompt starts
  AskTheManz();
  
  