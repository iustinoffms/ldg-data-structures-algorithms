const selectionSort = require("./selectionSort.js");

describe("selectionSort", () => {
  test("given an array, sort it ascending", () => {
    //Arange
    const array = [4, 6, 3, 2, 7, 1];

    //Act
    const result = selectionSort(array);

    //Assert
    expect(result).toEqual([1, 2, 3, 4, 6, 7]);
  });
});
