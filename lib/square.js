const Shape = require('./shapes');

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="60" y="35" width="170" height="170" fill="${this.color}" />`;
  }
}

module.exports=Square;