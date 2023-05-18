const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('should render a triangle SVG element with the given color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="50,165 150,0 250,165" fill="blue"/>');
  });
});

describe('Circle', () => {
  it('should render a circle SVG element with the given color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="red"/>');
  });
});

describe('Square', () => {
  it('should render a square SVG element with the given color', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="50" y="10" width="200" height="200" fill="green"/>');
  });
});
