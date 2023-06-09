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

function validateInputNumber(number) {
  return isNaN(number) || number < 1 || number > 5;
}
/**
 * Generate a random namber between given min and max value
 * @param {number} min the minimum value
 * @param {number} max the maximum value
 * @returns {number}
 */
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}

/**
 * Return if given number is even
 * @param {number} number the number to text
 * @returns {boolean}
 */
function isEven(number) {
  return !(number % 2);
}

// PALINDROME ALGORITHM

palindromeButton.addEventListener("click", function () {
  const userWord = palindromeInput.value.trim();

  if (!userWord) return;

  const result = isPalindrome(userWord) ? `<strong>is</strong>` : `<strong>is not</strong>`;

  palindromeResult.innerHTML = `${userWord} ${result} palindrome.`;
});

// EVEN OR ODD ALGORITHM
evenOrOddButton.addEventListener("click", function () {
  const userNumber = parseInt(evenOrOddInput.value);

  const isInvalid = validateInputNumber(userNumber);

  const userChoice = evenOrOddChoice.value;

  if (isInvalid) {
    evenOrOddResult.innerText = "Devi inserire un numero valido da 1 a 5!!";
    return;
  }

  const cpuNumber = generateRandom(1, 5);

  const sum = userNumber + cpuNumber;

  const resultIsEven = isEven(sum);

  const result = (isEven(sum) && userChoice === "even") || (!isEven(sum) && userChoice === "odd") ? "Player Wins!!" : "CPU Wins!!";

  const message = `<strong>${result}</strong> CPU choice: ${cpuNumber}`;

  evenOrOddResult.innerHTML = message;
});
