const {
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatches,
  multiMap,
  commutative,
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
    expect(
      await intersection([
        [5, 10, 15, 20],
        [15, 88, 1, 5, 7],
        [1, 10, 15, 5, 20],
      ])
    ).toStrictEqual([15, 5]);
  }
);

test("Challenge 8: Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.", () => {
  expect(
    union([
      [5, 10, 15],
      [15, 88, 1, 5, 7],
      [100, 15, 10, 1, 5],
    ])
  ).toStrictEqual([5, 10, 15, 88, 1, 7, 100]);
});

test("Challenge 9: Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.", () => {
  expect(
    objOfMatches(
      ["hi", "howdy", "bye", "later", "hello"],
      ["HI", "Howdy", "BYE", "LATER", "hello"],
      (str) => str.toUpperCase()
    )
  ).toStrictEqual({ hi: "HI", bye: "BYE", later: "LATER" });
});

test("Challenge 10: Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.", () => {
  expect(
    multiMap(
      ["catfood", "glue", "beer"],
      [
        (str) => str.toUpperCase(),
        (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
        (str) => str + str,
      ]
    )
  ).toStrictEqual({
    catfood: ["CATFOOD", "Catfood", "catfoodcatfood"],
    glue: ["GLUE", "Glue", "glueglue"],
    beer: ["BEER", "Beer", "beerbeer"],
  });
});

test("Challenge 11: Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).", () => {
  const multBy3 = (n) => n * 3;
  const divBy4 = (n) => n / 4;
  const subtract5 = (n) => n - 5;

  expect(commutative(multBy3, divBy4, 11)).toBe(true);
  expect(commutative(multBy3, subtract5, 10)).toBe(false);
  expect(commutative(divBy4, subtract5, 48)).toBe(false);
});
