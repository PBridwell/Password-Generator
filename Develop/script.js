
var generateBtn = document.querySelector("#generate");


// Initial prompts and confirms 

var stringLength = parseFloat(prompt("How long would you like your password to be? Please type a number between 8 and 128."))

console.log(stringLength);


if (stringLength > 7 && stringLength < 129) {
  alert("Your password will be " + stringLength + " characters long. Please click 'ok' on at least one of the following prompts");
  var lower = confirm("Do you want lower case letters?");
  var upper = confirm("Do you want capital letters?");
  var special = confirm("Do you want special characters?");
  var number = confirm("Do you want numbers?");
}
  else {
    prompt("Please enter a number between 8 and 128");
}










// Variables for password generation 
var randomizerFunc = [getLower, getUpper, getNumber, getSymbol]
const passwordCharacters = []
var isTrue =[lower, upper, special, number]

console.log(isTrue);
// Checks which char types are true and generates password characters
while (passwordCharacters.length < stringLength) {
  for (i = 0; i < isTrue.length; i++) {
      if (isTrue[i] === true) {
          passwordCharacters.push(randomizerFunc[i]());
      }
  }
}
// Converts password array into a string
var deliverable = passwordCharacters.join('')
console.log(passwordCharacters);

console.log(deliverable);
// Write password to the #password input
function writePassword() {
  var randomizerFunc = [getLower, getUpper, getNumber, getSymbol]
  for (i = 0; i < isTrue.length; i++) {
    if (isTrue[i] === true) {
        passwordCharacters.push(randomizerFunc[i]());
    }
}

  var password = deliverable
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var generateBtn = document.querySelector("#generate");

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Test prompts and confirms








// Generator Functions 
 
var randomizerFunc = [getLower(), getUpper(), getNumber(), getSymbol()]


console.log(String(randomizerFunc))



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
