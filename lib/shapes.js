class Shape {
    constructor(text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  
    getSVG() {
      const shapeSVG = this.render();
      const textSVG = this.getTextSVG();
      const svgCode = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG} 
      ${textSVG} 
    </svg>`;
  
      return svgCode;
    }

    
  
    render() {
      // This method should be implemented in the derived shape classes
      throw new Error("render() method not implemented.");
    }
  
    getTextSVG() {
      // Generate SVG code for text
      return `<text x="50%" y="50%" font-size="30" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="50,165 150,0 250,165" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="10" width="200" height="200" fill="${this.shapeColor}"/>`;
    }
  }
  
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
  };
  
  