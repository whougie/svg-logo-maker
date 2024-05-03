const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const Text = require('./lib/text');
const Svg = require('./lib/svg');
const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt  = require('inquirer-maxlength-input-prompt');

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
(error) => error ? console.log("Write to logo.svg failed") : console.log("Write to the logo.svg was successful") );
  
})