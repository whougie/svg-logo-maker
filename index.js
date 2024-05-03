const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const Text = require('./lib/text');
const Svg = require('./lib/svg');
const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt  = require('inquirer-maxlength-input-prompt');

// xx Use inquirer to ask for color (color or hexadecimal number), shape (circle, triangle, and square), text for logo (characters)

//xx The color is applied to the text and shape

// xx Generate SVG to a .svg file with the output of "Generated logo.svg" is printed in the command line

// xx Write jest tests

// Write Readme
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

inquirer.prompt([
  {
    type: 'list',
    message: 'What type of shape would you like?',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    message: 'What type of color (hex color can be used, but it must start with #" would you like the shape to be?',
    name: "shapeColor"
  },
  {
    type: 'maxlength-input',
    message: 'What type of text (up to 3 characters) would you like?',
    name: "text",
    maxLength: 3
  },
  {
    type: 'input',
    message: 'What type of color (hex color can be used, but it must start with #" would you like the text to be?',
    name: "textColor"
  }
])
.then( result => {
  let shape = null;
  const text = new Text(result.textColor, result.text);
  let svg = null;

  if ( result.shape === "Circle" ) 
    shape = new Circle();
  else if ( result.shape === "Square" )
    shape = new Square();
  else if ( result.shape === "Triangle" )
    shape = new Triangle();

  shape.setColor(result.shapeColor);
  
  svg = new Svg(shape, text) ;
fs.writeFile('examples/logo.svg', svg.render(), 
(error) => error ? console.log("Write to logo.svg failed") : console.log("Write to the custom.svg was successful") );
  
})



// const circle = new Circle();

// circle.setColor("blue");
// circle.render();

// const square = new Square();
// square.setColor("Orange");

// const triangle = new Triangle();
// triangle.setColor("green");

// const text1 = new Text();
// text1.setColor("white");
// text1.setText("ABC");
// text1.render();
// text1.getXCoordinate();
// text1.render();

// const svg = new Svg(square, text1) ;
// fs.writeFile('examples/logo.svg', svg.render(), 
// (error) => error ? console.log("Write to logo.svg failed") : console.log("Write to the custom.svg was successful") );