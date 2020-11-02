// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of potential characters
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specials = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[']

//Prompts to user
function askQuestions(){
  var passwordLength = prompt("How long should we make your password?");
  
  if(passwordLength < 8){
    alert("Must be at least 8 characters!");
    return;
  } else if (passwordLength > 128) {
    alert("Must be 128 characters or less!");
    return;
  }

  var includeUppers = confirm("Include upper case letters?");
  var includeLowers = confirm("Include lower case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecials = confirm("Include special characters?");
  if (includeUppers === false && includeLowers === false && includeNumbers === false && includeSpecials === false) {
    alert("Must include at least one uppercase letter, lowercase letter, special character, or number.");
    return;
  }

  console.log(includeUppers);
  console.log(includeLowers);
  console.log(includeNumbers);
  console.log(includeSpecials);

  var answers = {
    useUppers: includeUppers,
    useLowers: includeLowers,
    useNumbers: includeNumbers,
    useSpecials: includeSpecials,
    useLength: passwordLength
  }

  return answers;
}


function generatePassword(){

  var userAnswers = askQuestions();
  var useCharacters = [];

  console.log(userAnswers);

  if (userAnswers.useUppers){
    console.log("Include upper case letters");
  }
  if (userAnswers.useLowers){
    console.log("Include lower case letters");
  }
  if (userAnswers.useNumbers){
    console.log("Include numbers");
  }
  if (userAnswers.useSpecials){
    console.log("Include special chars");
  }




}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
