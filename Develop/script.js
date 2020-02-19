// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Test prompts and confirms
var stringLength = prompt("How long would you like your password to be? Please type a number between 8 and 28.")
var lowers = confirm("Do you want lower case letters?")
var uppers = confirm("Do you want capital letters?");
var specials = confirm("Do you want special characters?");
var numbers = confirm("Do you want numbers?");
alert("Your password will be " + stringLength + " characters long")
var typesCheckedArr = [lowers, uppers, specials, numbers]

var generatedPass = ''






// Generator Functions 
 
var randomizerFunc = {
  lower: getLower(),
  upper: getUpper(),
  number: getNumber(),
  symbol: getSymbol(),
}



 function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

  }
  
function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getSymbol() {
    const symbols = '!@$%^&*+-';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
 

console.log(randomizerFunc.lower)

for (i=0; i< stringLength; i ++) {
  console.log(randomizerFunc);
}