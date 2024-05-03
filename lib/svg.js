class Svg {
  constructor(shape, text) {
    this.shape = shape;
    this.text = text;
  }

  render() {
      return `<?xml version="1.0" standalone="no"?>
  <svg width="300" height="350" version="1.1" xmlns="http://www.w3.org/2000/svg">
  ${this.shape.render()}
  ${this.text.render()}
  </svg>`
  }
}

module.exports=Svg;