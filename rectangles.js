class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(points) {
    this.points = points;
  }
}

let rectanglesIntersect = (rectangle1, rectangle2) => false;

exports.Point = Point;
exports.Rectangle = Rectangle;
exports.rectanglesIntersect = rectanglesIntersect;
