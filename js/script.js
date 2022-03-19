// Assignment code here

//various arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",];


function getRequirements () {
  //get password length
  var passwordLength = prompt("how long is your password? The password length must be between 8 and 128 characters.");
    //loop the question if the password is less than 8 characters or more than 128. 
    while(passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
      passwordLength = prompt("how long is your password? The password length must be between 8 and 128 characters.");
    }


  //ask user if lowercase letters are needed
  var useLowerCase = confirm("Use lowercase? Click ok to confirm using lowercase."); 
  //ask user if uppercase letters are needed
  var useUpperCase = confirm("Use uppercase? Click ok to confirm using uppercase.");
  //ask user if symbols are needed
  var useSymbols = confirm ("Use symbols? Click ok to confirm using symbols.");
  //have user go through the getRequirements function againif they didn't password requirements
  if(!useLowerCase && !useUpperCase && !useSymbols) {
      window.alert("You must choose at least one type of password requirement.");
      return getRequirements();
  }

  //return the responses for the requirements gathered to any function that calls getRequirements 
  return {
    useLowerCase,
    useUpperCase,
    useSymbols,
    passwordLength
  }
}

function randomNumber (min, max) {
  var value = Math.floor(Math.random() *(max - min + 1) + min);

  return value;
}

function generatePassword() {
  //call getRequirements function to get the user's responses
  var reqs = getRequirements();

  //var passwordChars merges the selected character sets
  var passwordChars = [];
  if(reqs.useLowerCase) {
    passwordChars = passwordChars.concat(lowerCase);
  }

  if (reqs.useUpperCase) {
    passwordChars = passwordChars.concat(upperCase);
  }

  if (reqs.useSymbols) {
    passwordChars = passwordChars.concat(symbols);
  }

  //variable to store the random password
  var password = '';

  //randomly selects characters passwordLength times
  for (var i=0; i < reqs.passwordLength; i++){
    password = password + passwordChars[randomNumber(0, passwordChars.length-1)];
  }

  //returns the generated password
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
