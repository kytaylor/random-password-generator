// Character Arrays
var passLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var passUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var passNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var passSpecialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "~", "`", "|"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  // Try changing generatePassword to a string, but in the end it will be a function
  var passwordText = document.querySelector("#password");

  // Asks user how long the password should be
  var length = parseInt(prompt("How many characters should the password be? Choose a number between 8 and 128."));

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.");
    return;
  }

  // Asks user what parameters the password should have
  var confirmUpperCase = confirm("Should the password contain upper case letters?");
  var confirmLowerCase = confirm("Shoudl the password contain lower case letters?");
  var confirmNumber = confirm("Should the password contain numbers?");
  var confirmSpecialCharacter = confirm("Should the password contain special characters?");

  if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialCharacter) {
    alert("You must choose at least 1 criteria.");
    return;
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
