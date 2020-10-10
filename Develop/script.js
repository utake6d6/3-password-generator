// Assignment code here
// create variables for all elements to be manipulated by javascript
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#password");

//create a function for clicking on the button
generateBtn.addEventListener"click", function () {
  //prompt to obtain the requested char length
  var charLength = promt(
    "How many characters would you like your new password to be? Please pick a number between 8 and 128."
  );

  //create a warning for 'if prompt' about inputing numbers being < or > set char range





}

//begin program if a character range is choosen, range must be between 8 and 128
if (charLength >= 8 && charLength <= 128) {
  //create variables for password generater
  let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  let numbers = "0123456789";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //create a blank string for the new password generated
  let newPassword = "";

  //prompt user which type of characters they can choose from
  let genSymbols = confirm("Would you like to include special characters? i.e (!@#$%^&*, etc.)");
  let genNumbers = confirm("Would you like to include numbers?");
  let genLowerCase = confirm("Would you like to include lowercase letters?");
  let genUpperCase = confirm("Would you like to include uppercase letters?")

  //create some variables that will add all the added characters together (var)
  var allCharacters = symbols + numbers + lowerCase + upperCase;
  var a = symbols + numbers + lowerCase;
  var b = symbols + numbers + upperCase;
  var c = symbols + lowerCase + upperCase;
  var d = numbers + lowerCase + upperCase;
  var e = symbols + numbers;
  var f = symbols + lowerCase;
  var g = symbols + upperCase;
  var h = numbers + lowerCase;
  var j = numbers + upperCase;
  var k = lowerCase + upperCase;

  //create 'if statements with some loops that matches with every combination of passwords (need to think up a function later)
  if (
    genSymbols === true &&
    genNumbers === true &&
    genLowerCase === true &&
    genUpperCase === true
  ) {
    for (i =0; i < charLength; i++) {
      let character = Math.floor(Math.random() *allCharacters.length);
      newPassword += allCharacters.charAt(character, character +1);
    }
  } else if (
    genSymbols === true &&
    genNumbers === true &&
    genLowerCase === true &&
    genUpperCase === false
  ) {
    for (i = 0; i < charLength; i++) {
      let character= Math.floor(Math.random() * a.length);
      newPassword += a.charAt(character, character +1);
    }
  } else if (
    genSymbols === true &&
    genNumbers === true &&
    genLowerCase === false &&
    genUpperCase === true
  ) {
    for (i= 0; i < carLength; i++) {
      let character = Math.floor(Math.random() *b.length);
      newPassword += b.charAt(character, character +1);
    }
  } else if (
    genSymbols === true &&
    genNumbers === false &&
    genLowerCase === true &&
    genUpperCase === true
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * c.length);
      newPassword += c.charAt(character, character + 1);
    }
  } else if (
    genSymbols === false &&
    genNumbers === true &&
    genLowerCase === true &&
    genUpperCase === true
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * d.length);
      newPassword += d.charAt(character, character + 1);
    }
  } else if (
    genSymbols === true &&
    genNumbers === true &&
    genLowerCase === false &&
    genUpperCase === false
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() *e.length);
      newPassword += e.charAt(character, character + 1);
    }
  } else if (
    genSymbols === true &&
    genNumbers === false &&
    genLowerCase === true &&
    genUpperCase === false &&
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * f.length);
      newPassword += f.charAt(character, character +1);
    }
  } else if (
    genSymbols === true &&
    genNumbers === false &&
    genLowerCase === false &&
    genUpperCase === true
  ) {
    for (i= 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * g.length);
      newPassword += g.charAt(character, character +1);
    }  
  } else if (
  genSymbols === false &&
    genNumbers === true &&
    genLowerCase === true &&
    genUpperCase === false
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * h.length);
    }
  } else if (
    genSymbols === false &&
    genNumbers === true &&
    genLowerCase === false &&
    genUpperCase === true
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() *j.length);
      newPassword += j.charAt(character, character +1);
    }
  } else if (
    genSymbols === false &&
    genNumbers === false &&
    genLowerCase === true &&
    genUpperCase === true
  ) {
    for (i = 0; i < charLength; i++) {
      let character = Math.floor(Math.random() * k.length);
      newPassword += k.charAt(character, character +1);
    }
  





}