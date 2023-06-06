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
