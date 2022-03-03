const duplicates = require("./duplicates");

describe("duplicateValues", () => {
  test("given an array with duplicate values should return true", () => {
    //Arange
    const array = [3, 2, 3, 1];

    //Act
    const result = duplicates(array);

    //Assert
    expect(result).toBe(true);
  });

  test("given an array without duplicate values should return false", () => {
    //Arange
    const array = [5, 4, 3, 2, 1];

    //Act
    const result = duplicates(array);

    //Assert
    expect(result).toBe(false);
  });

  test("given an array without values should return false", () => {
    //Arange
    const array = [];

    //Act
    const result = duplicates(array);

    //Assert
    expect(result).toBe(false);
  });
});
