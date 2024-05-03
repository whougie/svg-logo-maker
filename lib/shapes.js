class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
      console.log("I am a shape");
      // this will need to be overwritten by the class for the actual shape
  }
}

module.exports=Shape;