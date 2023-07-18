const {
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
} = require("../functional");

test("Challenge 1: accepts one input and adds 2 to it", () => {
  expect(addTwo(3)).toBe(5);
});

test('Challenge 2: accepts one input and adds an "s" to it', () => {
  expect(addS("pizza")).toBe("pizzas");
});

test(
  "Challenge 3: return a new array filled with numbers that are the result" +
    "of using the 'callback' function on each element of the input array",
  () => {
    expect(map([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5]);
  }
);

test(
  "Challenge 4: forEach takes an array and a callback, and runs" +
    "the callback on each element of the array",
  () => {
    let alphabet = "";
    const letters = ["a", "b", "c", "d"];
    forEach(letters, (char) => (alphabet += char));
    expect(alphabet).toBe("abcd");
  }
);

test("Challenge 5: use forEach inside of mapWith instead of using a for loop", () => {
  expect(mapWith([1, 2, 3], addTwo)).toStrictEqual([3, 4, 5]);
});

test(
  "Challenge 6:  The function reduce takes an array and" +
    "reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.",
  () => {
    const nums = [4, 1, 3];
    const add = (a, b) => a + b;
    expect(reduce(nums, add, 0)).toBe(8);
  }
);

test(
  "Challenge 7: Construct a function intersection that compares input" +
    "arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!",
  async () => {
    console.log(
      intersection([
        [5, 10, 15, 20],
        [15, 88, 1, 5, 7],
        [1, 10, 15, 5, 20],
      ])
    );

    expect(
      await intersection([
        [5, 10, 15, 20],
        [15, 88, 1, 5, 7],
        [1, 10, 15, 5, 20],
      ])
    ).toStrictEqual([15, 5]);
  }
);
