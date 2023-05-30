// Importing Triangle, Square, Circle classes from ./shapes.js
const { Tri, Squa, Cir } = require("../lib/shapes");

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Tri();
    shape.setThatColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>'
    );
  });
});


describe("Circle test", () => {
  test("test for a circle with a blue background", () => {
    const shape = new Cir();
    shape.setThatColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="25" cy="75" r="20" fill="${this.color}"/> '
    );
  });
});


describe("Square test", () => {
  test("test for a square with a blue background", () => {
    const shape = new Squa();
    shape.setThatColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>'
    );
  });
});



