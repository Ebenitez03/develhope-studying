class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator{
  static calculate(obj){
    let area;
    if(obj instanceof Square){
      area= 4* obj.side;
    }
    if(obj instanceof Rectangle){
      area= 2*obj.width+2*obj.height;
    }
    if(obj instanceof Circle){
      area= Math.round(2*3.14*obj.radius);
    }
    return area;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));