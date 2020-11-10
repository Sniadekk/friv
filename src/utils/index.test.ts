import { rangeUntil, Option } from "./index";

// This would be a good place to use property based testing
test("Range is correctly generated", () => {
  expect(rangeUntil(0, 5, 5)).toEqual([0, 1, 2, 3, 4]);
  expect(rangeUntil(1, 6, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(rangeUntil(2, 7, 5)).toEqual([2, 3, 4, 5, 6]);
});

test("Range is correctly truncated if it encounters end index", () => {
  expect(rangeUntil(0, 0, 5)).toEqual([]);
  expect(rangeUntil(0, 1, 5)).toEqual([0]);
  expect(rangeUntil(0, 2, 5)).toEqual([0, 1]);
  expect(rangeUntil(0, 3, 5)).toEqual([0, 1, 2]);
});

test("Option.none() creates instance with no value inside", () => {
  const option = Option.none();
  expect(option.val).toBe(undefined);
});

test("Option.some() creates instance with given value inside", () => {
  const option = Option.some(10);
  expect(option.val).toBe(10);
});

test("Option.map() returns option with manipulated value inside", () => {
  const a = Option.some(10);
  expect(a.val).toBe(10);
  const b = a.map((val) => val * 2);
  expect(b.val).toBe(20);
});

test("Option.isSome() returns true if it has value stored inside", () => {
  const option = Option.some(10);
  expect(option.val).toBe(10);
  expect(option.isSome()).toBe(true);
  expect(option.isNone()).toBe(false);
});

test("Option.isNone() returns true if it has no value stored inside", () => {
  const option = Option.none();
  expect(option.val).toBe(undefined);
  expect(option.isNone()).toBe(true);
  expect(option.isSome()).toBe(false);
});

test("Option.getOr() returns value inside of the option", () => {
  const option = Option.some(10);
  expect(option.val).toBe(10);
  expect(option.getOr(0)).toBe(10);
});

test("Option.getOr() returns default value if it doesn't have value inside", () => {
  const option = Option.none();
  expect(option.val).toBe(undefined);
  expect(option.getOr(10)).toBe(10);
});
