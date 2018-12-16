const {
  Point,
  Segment,
  Rectangle
} = require('./rectangles');

const point1 = new Point(1, 1);
const point2 = new Point(1, 2);
const point3 = new Point(2, 2);
const point4 = new Point(2, 1);

const segment1 = new Segment(point1, point2);
const segment2 = new Segment(point2, point3);
const segment3 = new Segment(point3, point4);
const segment4 = new Segment(point4, point1);

const rectangle1 = new Rectangle([segment1, segment2, segment3, segment4]);
const rectangle2 = new Rectangle([segment1, segment2, segment3, segment4]);

test('rectangles are identical (and therefore intersect)', () => {
  expect(
    rectangle1.intersects(rectangle2)
  ).toBe(true);
});
