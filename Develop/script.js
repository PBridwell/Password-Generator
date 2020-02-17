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