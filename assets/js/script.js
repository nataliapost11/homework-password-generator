// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Gets the length of the password from user until they enter the value from 8 to 128
function getPasswordLength() {
  var length = prompt("Enter the length of the password (8-128)");
  while (!(length>=8 && length<=128)){
    length = prompt("Enter the length of the password (8-128)");
  }
  return length;
}

// Generate random characters based on the character options passed
function generateRandomCharacters(charOptions) {
  var charList = "";
  if (charOptions.includeUpperCase) { charList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
  if (charOptions.includeLowerCase) { charList += "abcdefghijklmnopqrstuvwxyz"; }
  if (charOptions.includeNumeric) { charList += "0123456789"; }
  if (charOptions.includeSpecial) { charList += "!@#$%^&*~`.,?()+={}[]"; }

  var options = charList.split("");
  var pwd = "";
  for (var i = 0; i < charOptions.length; i++) {
    // Generate random number for the character
    var index = Math.floor(Math.random() * options.length);
    var charSelected = options[index];
    pwd += charSelected;
  }
  return pwd;
}

// Function to generate the password
function generatePassword() {
  var pwdOptions = {
    includeUpperCase: false,
    includeLowerCase: false,
    includeNumeric: false,
    includeSpecial: false,
    length: 0
  };
  pwdOptions.length = getPasswordLength (); // prompt returns string value that entered
  pwdOptions.includeUpperCase = confirm("Would you like to include upper case alphabets?"); // confirm returns true or false
  pwdOptions.includeLowerCase = confirm("Would you like to include lower case alphabets?");
  pwdOptions.includeNumeric = confirm("Would you like to include number?");
  pwdOptions.includeSpecial = confirm("Would you like to include special characters?");

  var pwd = generateRandomCharacters(pwdOptions);

  return pwd;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

