const bubbleSort = require("./bubbleSort");

describe("bubbleSort", () => {
  test("given an unsorted array should return a sorted array", () => {
    // Arrange
    const unsortedArray = [2, 1, 3, -1, 5, 8, 9, -12];

    // Act
    const sortedArray = bubbleSort(unsortedArray);

    // Assert
    expect(sortedArray).toEqual([-12, -1, 1, 2, 3, 5, 8, 9]);
  });
});
