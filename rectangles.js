class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isCongruent(point2) {
    return this.x == point2.x && this.y == point2.y;
  }
}

class Segment {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  determinant() {
    return this.point1.x * this.point2.y - this.point2.x * this.point1.y;
  }

  length() {
    return Math.pow(this.point2.x - this.point1.x, 2)
    + Math.pow(this.point2.y - this.point1.y, 2);
  }

  formsRightAngle(segment2) {
    return this.point2.isCongruent(segment2.point1)
    && Math.pow(this.length(), 2) + Math.pow(segment2.length(), 2) ==
      Math.pow((new Segment(segment2.point2, this.point1)).length(), 2);
  }
}

class Rectangle {
  constructor(segments) {
    this.segments = segments;
  }

  area() {
    return this.segments.reduce((acc, segment) => acc + segment.determinant() / 2, 0);
  }

  isValid() {
    return this.area() > 0
    && this.segments.length == 4
    && this.segments.every((segment, i) => segment.formsRightAngle(this.segments[(i + 1) % 4]));
  }

  intersects(rectangle2) {
    return false;
  }
}

exports.Point = Point;
exports.Segment = Segment;
exports.Rectangle = Rectangle;
