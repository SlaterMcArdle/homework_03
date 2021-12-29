// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // create a function to check for cancel button from a prompt
  function cancelled(inputValue) {
    if (inputValue == null) {
      // Provide a cancelled message
      alert("Password Generation Cancelled");
      // return true as the operation has been cancelled
      return true;
    } else {
      // otherwise return false
      return false;
    }
  }
  // Ask how many characters to include (between 8 and 128)
  var characterCount = prompt("How many Characters in the password? (8-128)")
  // Check if they pressed cancel. If not, continue.
  if (!cancelled(characterCount)) {
    // convert the input into a number
    characterCount = parseInt(characterCount, 10);
    // Make sure the input is actually a number and within the specified range. If not, add a new prompt
    while (characterCount < 8 || characterCount > 128 || isNaN(characterCount)) {
      characterCount = prompt("Please input a number of characters in the listed range (8-128)")
      // Check if they press cancel in the new prompt window. If true, return a no password generated message
      if (cancelled(characterCount)) {
        return 'No Password Generated';
      }
      // convert the new input into a number and restart the loop
      characterCount = parseInt(characterCount, 10);
    }
  } 
  // If the operation is cancelled, return a no password generated message to display in the text box
  else {
    return 'No Password Generated'
  }
  // create a variable to store potential password characters based on user input
  var potentialCharacters = ''
  // Ask if the user wants lowercase characters, store in a boolean
  var includeLowerCase = confirm("Include lowercase characters?");
  // If yes, add them to the potential characters
  if (includeLowerCase) {
    potentialCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }

  // Ask if the user wants uppercase characters, store in a boolean
  var includeUpperCase = confirm("Include uppercase characters?");
  // If yes, add them to the list of potential characters
  if (includeUpperCase) {
    potentialCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  // Ask if the user wants numeric characters, store in a boolean
  var includeNumeric = confirm("Include numeric characters?");
  // If yes, add them to the list of potential characters
  if (includeNumeric) {
    potentialCharacters += '1234567890';
  }

  // Ask if the user wants special characters, store in a boolean
  var includeSpecial = confirm("Include special characters?");
  // If yes, add them to the list of potential characters
  if (includeSpecial) {
    // Add most of the special characters
    potentialCharacters += ' !#$%&()*+,-./:;<=>?@[]^_`{|}~';
    // Add single and double quotes
    potentialCharacters += '"';
    potentialCharacters += "'";
    // Add back slash
    potentialCharacters += String.raw`\ `;
  }
  // If the user selected no for all the options, alert a cancel message and return a no password generated message.
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("Password Generation Cancelled.");
    return 'No Password Generated';
  }
  // create a variable to hold the generated password
  var password = '';
  // loop for as many times as the user requested characters
  for (var i = 0; i < characterCount; i++) {
    // Randomly select a character from the list of available characters and concatonate it onto the password string.
    password += potentialCharacters.charAt(Math.floor(Math.random() * potentialCharacters.length));
  }
  // return the password to display in the textbox
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
