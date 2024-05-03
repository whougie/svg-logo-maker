const Shape = require('./shapes');

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="145" cy="120" r="85" fill="${this.color}" />`;
  }
}

module.exports=Circle;