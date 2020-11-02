// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of potential characters
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specials = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[']

function askQuestions(){
  var passwordLength = prompt("How long should we make your password?");
  
  if(passwordLength < 8){
    alert("Must be at least 8 characters!");
  } else if (passwordLength > 128) {
    alert("Must be 128 characters or less!");
  }

  var includeUppers = confirm("Include upper case letters?");
  var includeLowers = confirm("Include lower case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecials = confirm("Include special characters?");
  if (includeUppers === false && includeLowers === false && includeNumbers === false && includeSpecials === false) {
    alert("Must include at least one uppercase letter, lowercase letter, special character, or number.")
  }

  console.log(includeUppers);
  console.log(includeLowers);
  console.log(includeNumbers);
  console.log(includeSpecials);

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
