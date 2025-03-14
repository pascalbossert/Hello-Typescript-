import { isTriplet } from "./pythagoras";

test("valid pythagorean triplet (3,4,5)", () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test("invalid triplet (2,2,5)", () => {
  expect(isTriplet(2, 2, 5)).toBe(false);
});
