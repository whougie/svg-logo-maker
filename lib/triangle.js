const Shape = require('./shapes');

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports=Triangle;