// DOM elements
// Palindrome Elements
const palindromeInput = document.getElementById("palindrome-input");
const palindromeButton = document.getElementById("palindrome-button");
const palindromeResult = document.getElementById("palindrome-result");

// Even or Odd Elements
const evenOrOddInput = document.getElementById("number-input");
const evenOrOddChoice = document.getElementById("eo-choice-input");
const evenOrOddButton = document.getElementById("eo-button");
const evenOrOddResult = document.getElementById("eo-result");

//FUNCTIONS

/**
 * Check if a given word is palindrome or not
 * @param {string} word the word to check
 * @returns {boolean} whether the given string is palindrome or not
 */

function isPalindrome(word) {
  let newWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word.at(i);
  }

  return word === newWord;
}

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function isEven(number) {
  return !(number % 2);
}

// PALINDROME ALGORITHM

palindromeButton.addEventListener("click", function () {
  const userWord = palindromeInput.value.trim();

  if (!userWord) return;

  let result = "<strong>is not</strong>";

  const palindrome = isPalindrome(userWord);

  if (palindrome) result = "<strong>is</strong>";

  const message = `'${userWord} ' ${result} palindrome!`;

  palindromeResult.innerHTML = message;
});

// EVEN OR ODD ALGORITHM
evenOrOddButton.addEventListener("click", function () {
  const userNumber = parseInt(evenOrOddInput.value);

  //   const isValid = validateInput(userNumber);

  const userChoice = evenOrOddChoice.value;

  //if (!isValid) return;

  const cpuNumber = generateRandom(1, 5);

  const sum = userNumber + cpuNumber;

  const resultIsEven = isEven(sum);

  let result = "CPU Wins!!";

  if ((resultIsEven && userChoice === "even") || (!resultIsEven && userChoice === "odd")) {
    result = "Player Wins!!";
  }

  const message = `<strong>${result}</strong> CPU choice: ${cpuNumber}`;

  evenOrOddResult.innerHTML = message;
});
