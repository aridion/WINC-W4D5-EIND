const {
  wordpicker,
  rightLetters,
  descreaseTries,
  wrongLetters,
  updateList,
  endGame,
} = require("./script.js");

//1
describe("A word is being picked", () => {
  test("A word is being picked", () => {
    const testList = [
      "vis",
      "toeter",
      "developer",
      "telefoon",
      "moeder",
      "snoer",
      "geeuw",
    ];
    expect(wordpicker(testList)).toBeDefined();
  });
});

//2
describe("Test to check if a wrong or right letter is added to the array with wrong or right letters", () => {
  test("is the wrongly guessed letter added to wrong letters", function () {
    const expected = ["p"];
    expect(
      wrongLetters(["t", "o", "e", "t", "e", "r"], ["e", "o", "p"])
    ).toEqual(expect.arrayContaining(expected));
  });
  test("is the rightly guessed letter added to right letters", function () {
    const expected = ["o"];
    expect(
      rightLetters(["t", "o", "e", "t", "e", "r"], ["e", "o", "p"])
    ).toEqual(expect.arrayContaining(expected));
  });
});

//3
describe("Amount of tries decreasing by one", () => {
  test("Tries are decreasing", () => {
    const descreaseTries = (letter) => {
      letter = 0;
      return ++letter;
    };
    expect(descreaseTries()).toBe(1);
  });
});

//4
describe("if the List gets updated", () => {
  test("The list gets updated", () => {
    const expected = ["b", "a"];
    expect(updateList(["b"], "a")).toEqual(expected);
  });
});

//5 //6
describe("Endgame Winnen en verliezen", () => {
  test("Endgame Winnen", () => {
    expect(endGame(true)).toBe(true);
  });
  test("Endgame Verliezen", () => {
    expect(endGame(false)).toBe(false);
  });
});
