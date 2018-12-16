// function closeTo used to handle JavaScript precision errors
const precision = 10;
let closeTo = (a, b) => (Math.abs(a - b) < Math.pow(0.1, precision));

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
    return Math.sqrt(
      Math.pow(this.point2.x - this.point1.x, 2)
      + Math.pow(this.point2.y - this.point1.y, 2)
    );
  }

  formsRightAngle(segment2) {
    return this.point2.isCongruent(segment2.point1)
      && closeTo(Math.pow(this.length(), 2) + Math.pow(segment2.length(), 2),
        Math.pow((new Segment(segment2.point2, this.point1)).length(), 2));
  }

  // from http://www.cs.swan.ac.uk/~cssimon/line_intersection.html
  intersects(segment2) {
    const { x: x1, y: y1 } = this.point1;
    const { x: x2, y: y2 } = this.point2;
    const { x: x3, y: y3 } = segment2.point1;
    const { x: x4, y: y4 } = segment2.point2;
    const ta = ((y3 - y4) * (x1 - x3) + (x4 - x3) * (y1 - y3))
      / ((x4 - x3) * (y1 - y2) - (x1 - x2) * (y4 - y3));
    const tb = ((y1 - y2) * (x1 - x3) + (x2 - x1) * (y1 - y3))
      / ((x4 - x3) * (y1 - y2) - (x1 - x2) * (y4 - y3));
    return 0 <= ta && ta <= 1 && 0 <= tb && tb <= 1;
  }
}

class Polygon {
  constructor(points) {
    this.points = points;
    this.sides = points.length;
    this.segments = points.map((point, i) => new Segment(point, points[(i + 1) % this.sides]));
  }

  area() {
    return Math.abs(this.segments.reduce((acc, segment) => acc + segment.determinant() / 2, 0));
  }

  // tests if point is inside a polygon, by adding the areas of the triangles
  // formed by each side and the given point; if the area is the same as the
  // area of the polygon, then the point is inside it (or over its sides).
  contains(point) {
    const triangleFanArea = this.segments.reduce((acc, segment) => acc + (new Polygon([segment.point1, segment.point2, point])).area(), 0);
    const rectangleArea = this.area();
    return rectangleArea > triangleFanArea || closeTo(rectangleArea, triangleFanArea);
  }
}

class Rectangle extends Polygon {

  // test if the rectangle is strictly valid, as in all four angles being right;
  // otherwise it's a triangle, or a line segment, or a point.
  isValid() {
    return this.sides == 4
    && this.segments.every((segment, i) => segment.formsRightAngle(this.segments[(i + 1) % 4]));
  }

  intersects(rectangle2) {
    if (!this.isValid() || !rectangle2.isValid()) {
      return false;
    }

    // if any point of one rectangle is inside (or over a side of) the other
    // rectangle, they intersect.
    if (this.points.some((point) => rectangle2.contains(point))
      || rectangle2.points.some((point) => this.contains(point))) {
      return true;
    }

    // if previous tests were excluded, test whether any side from one rectangle
    // intersects any side from the other rectangle; at this point it will tell
    // whether the rectangles intersect or not.
    return (this.segments.some((segment1) => rectangle2.segments.some((segment2) => segment1.intersects(segment2))));
  }
}

exports.precision = precision;
exports.Point = Point;
exports.Segment = Segment;
exports.Rectangle = Rectangle;
