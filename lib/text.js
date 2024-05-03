class Text {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  getXCoordinate() {
    if (this.text.length === 1) {
      return 133;
    } else if (this.text.length === 2) {
      return 113;
    } else if (this.text.length === 3) {
      return 108;
    }
  }

  render() {
    return `<text x="${this.getXCoordinate()}" y="100" fill="${this.color}">${this.text}</text>
    <style>
      <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 42px serif;
      }
      ]]>
    </style>`;
  }
}

module.exports=Text;