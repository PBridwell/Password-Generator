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

confirm("Do you want capital letters?");
confirm("Do you want special characters?");
confirm("Do you want numbers?");
alert("Your password will be " + stringLength + " characters long")


// Generator Functions 
 var randomizer = {
  getLower: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

  },
  
getUpper: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

   getNumber: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

   getSymbol: function() {
    const symbols = '!@$%^&*+-';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
 }

console.log(randomizer.getLower())
console.log(randomizer.getUpper())
console.log(randomizer.getNumber())
console.log(randomizer.getSymbol())