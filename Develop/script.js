// Assignment Code
var generateBtn = document.querySelector("#generate");

function askQuestions(){
  var passwordLength = prompt("How long should we make your password?");
  
  if(passwordLength < 8){
    alert("Must be at least 8 characters!");
  } else if (passwordLength > 128) {
    alert("Must be 128 characters or less!");
  }

  var includeUpper = confirm("Include upper case letters?");
  var includeLower = confirm("Include lower case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  if (includeUpper === false && includeLower === false && includeNumbers === false && includeSpecial === false) {
    alert("Must include at least one uppercase letter, lowercase letter, special character, or number.")
  }
}

function generatePassword(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", askQuestions);
