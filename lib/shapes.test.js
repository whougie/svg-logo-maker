const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');
const Text = require('./text');
const Svg = require('./svg');

describe('Testing the all the classes', () => {
  describe('Testing the Triangle class', () => {
    it('should be an instance of Triangle', () => {
      const shape = new Triangle();

      expect(shape).toBeInstanceOf(Triangle);
    })

    it('should render properly as a triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    })
  })

  describe('Testing the Square class', () => {
    it('should be an instance of Square', () => {
      const shape = new Square();

      expect(shape).toBeInstanceOf(Square);
    })

    it('should render properly as a square', () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="60" y="35" width="170" height="170" fill="blue" />');

    })
  })

  describe('Testing the Circle class', () => {
    it('should be an instance of Circle', () => {
      const shape = new Circle();

      expect(shape).toBeInstanceOf(Circle);
    })

    it('should render properly as a Circle', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="145" cy="120" r="85" fill="blue" />');

    })
  })

  describe('Testing the Text class', () => {
    it('should be an instance of Text', () => {
      const text = new Text();

      expect(text).toBeInstanceOf(Text);
    })

    it('should output the correct x coordinate when one character is entered', () => {
      const text = new Text();
      text.setText('A');
      expect(text.getXCoordinate()).toEqual(133);
    })

    it('should output the correct x coordinate when two character is entered', () => {
      const text = new Text();
      text.setText('AB');
      expect(text.getXCoordinate()).toEqual(113);
    })

    it('should output the correct x coordinate when three character is entered', () => {
      const text = new Text();
      text.setText('ABC');
      expect(text.getXCoordinate()).toEqual(108);
    })

    it('should render properly as a Text', () => {
      const text = new Text();
      text.setColor("blue");
      text.setText("ABC");
      expect(text.render()).toEqual(`<text x="108" y="100" fill="blue">ABC</text>
    <style>
      <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 42px serif;
      }
      ]]>
    </style>`);

    })
  })

  describe('Testing the Svg class', () => {
    it('should be an instance of Svg', () => {
      const circle = new Circle();
      circle.setColor("blue");
    
      const text = new Text();
      text.setColor('red');
      text.setText('ABC');

      const svg = new Svg(circle, text);

      expect(svg).toBeInstanceOf(Svg);
    })

    it('should render properly as a Svg', () => {
      const circle = new Circle();
      circle.setColor("blue");
    
      const text = new Text();
      text.setColor('red');
      text.setText('ABC');

      const svg = new Svg(circle, text);
      expect(svg.render()).toEqual(`<?xml version="1.0" standalone="no"?>
  <svg width="300" height="350" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle cx="145" cy="120" r="85" fill="blue" />
  <text x="108" y="100" fill="red">ABC</text>
    <style>
      <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 42px serif;
      }
      ]]>
    </style>
  </svg>`);

    })
  })

} )