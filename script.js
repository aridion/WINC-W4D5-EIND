let word;
let gameOver;
let tries = 0;

const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];

const wordpicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  return list[index];
};

const wordGuessed = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });

  return remaining.length === 0;
};

const endGame = (winOrLose) => {
  //document.querySelector(winOrLose).style.display = "block";
  gameOver = true;
  return winOrLose;
};

const wrongLetters = function (word, inputLetter) {
  const newWrongLetter = inputLetter.filter(function (letter) {
    return !word.includes(letter);
  });
  // document.querySelector(".guessed_letters").innerHTML = newWrongLetter.join(
  //   " "
  // );
  return newWrongLetter;
};

const rightLetters = function (word, inputLetter) {
  let newRightLetter = word.map(function (letter) {
    if (inputLetter.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  //document.querySelector(".the_word").innerHTML = newRightLetter.join(" ");
  return newRightLetter;
};

const descreaseTries = (letter) => {
  if (!word.includes(letter)) {
    tries++;
    //document.querySelector(".lives span").innerHTML = 5 - tries;
  }
};

const updateList = (inputs, userInput) => {
  inputs.push(userInput);
  //rightLetters(word, inputs);
  //wrongLetters(word, inputs);
  return inputs;
};

const guessLetter = function () {
  if (gameOver) {
    return;
  }
  const userInput = document.querySelector("input").value;
  //document.querySelector("input").value = "";

  descreaseTries(userInput);

  updateList(inputs, userInput);

  if (wordGuessed(word, inputs)) {
    endGame(".win");
  } else if (tries >= 5) {
    endGame(".lose");
  }
};

function beginTheGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordpicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  rightLetters(word, inputs);
  wrongLetters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGame);
  beginTheGame();
});

module.exports = {
  wordpicker,
  descreaseTries,
  guessLetter,
  updateList,
  wrongLetters,
  rightLetters,
  endGame,
};
