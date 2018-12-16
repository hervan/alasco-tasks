const { Point, Rectangle, rectanglesIntersect } = require('./rectangles');

test('rectangles are identical (and therefore intersect)', () => {
  expect(
    rectanglesIntersect(
      new Rectangle([
        new Point(1, 1),
        new Point(1, 2),
        new Point(2, 2),
        new Point(2, 1)
      ]),
      new Rectangle([
        new Point(1, 1),
        new Point(1, 2),
        new Point(2, 2),
        new Point(2, 1)
      ]))).toBe(true);
});
