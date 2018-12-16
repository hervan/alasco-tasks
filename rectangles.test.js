const {
  Point,
  Segment,
  Rectangle
} = require('./rectangles');

const point1 = new Point(1, 1);
const point2 = new Point(1, 2);
const point3 = new Point(2, 2);
const point4 = new Point(2, 1);
const point5 = new Point(3, 1);
const point6 = new Point(3, 2);
const point7 = new Point(4, 2);
const point8 = new Point(4, 1);

test('point1 is not congruent to point2', () => {
  expect(
    point1.isCongruent(point2)
  ).toBe(false);
});

test('point3 is congruent to (2, 2)', () => {
  expect(
    point3.isCongruent(new Point(2, 2))
  ).toBe(true);
});

const segment1 = new Segment(point1, point2);
const segment2 = new Segment(point2, point3);
const segment3 = new Segment(point3, point4);
const segment4 = new Segment(point4, point1);
const segment5 = new Segment(point5, point6);
const segment6 = new Segment(point6, point7);
const segment7 = new Segment(point7, point8);
const segment8 = new Segment(point8, point5);

test('length of segment1 is 1', () => {
  expect(
    segment1.length()
  ).toBe(1);
});

test('segment from point1 to point3 is a unit square diagonal, so its length is sqrt(2)', () => {
  expect(
    (new Segment(point1, point3)).length()
  ).toBe(Math.SQRT2);
});

test('length of a segment defined by congruent points is zero', () => {
  expect(
    (new Segment(point1, new Point(1, 1))).length()
  ).toBe(0);
});

test('determinant for a segment of length zero is zero', () => {
  expect(
    (new Segment(point1, new Point(1, 1))).determinant()
  ).toBe(0);
});

test('segment1 forms a right angle with segment2', () => {
  expect(
    segment1.formsRightAngle(segment2)
  ).toBe(true);
});

test('segment1 doesn\'t form a right angle with itself', () => {
  expect(
    segment1.formsRightAngle(segment1)
  ).toBe(false);
});

test('segment1 doesn\'t form a right angle with segment3 (they\'re parallel)', () => {
  expect(
    segment1.formsRightAngle(segment3)
  ).toBe(false);
});

test('segment1 forms a right angle with segment ((1, 2), (3, 2))', () => {
  expect(
    segment1.formsRightAngle(new Segment(new Point(1, 2), new Point(3, 2)))
  ).toBe(true);
});

const rectangle1 = new Rectangle([segment1, segment2, segment3, segment4]);
const rectangle2 = new Rectangle([segment1, segment2, segment3, segment4]);
const rectangle3 = new Rectangle([segment5, segment6, segment7, segment8]);

test('area of rectangle1 is 1', () => {
  expect(
    rectangle1.area()
  ).toBe(1);
});

test('rectangle1 and rectangle2 are identical (and therefore intersect)', () => {
  expect(
    rectangle1.intersects(rectangle2)
  ).toBe(true);
});

test('rectangle1 and rectangle3 don\'t intersect', () => {
  expect(
    rectangle1.intersects(rectangle3)
  ).toBe(false);
});
