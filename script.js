// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of potential characters
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specials = ['!','"','#','$','%','&',',',')','(','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','}','|','~'] 

var combined = [];
var typeCheck = []; 

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
  
  if (includeUppers === true){
    console.log("Include upper case letters");
    combined.push(uppers);
    typeCheck.push(uppers[Math.floor(Math.random() * Math.floor(uppers.length) )]);
  }
  
  
  if (includeLowers === true){
    console.log("Include lower case letters");
    combined.push(lowers);
    typeCheck.push(lowers[Math.floor(Math.random() * Math.floor(lowers.length) )]);
  }
  
  if (includeNumbers === true){
    console.log("Include numbers");
    combined.push(numbers);
    typeCheck.push(numbers[Math.floor(Math.random() * Math.floor(numbers.length) )]);
  }
  
  if (includeSpecials === true){
    console.log("Include special chars");
    combined.push(specials);
    typeCheck.push(specials[Math.floor(Math.random() * Math.floor(specials.length) )]);
  }
  if (includeUppers === false && includeLowers === false && includeNumbers === false && includeSpecials === false) {
    alert("Must include at least one uppercase letter, lowercase letter, special character, or number.");
    return;
  }

  var finalCharacterSet = [].concat.apply([], combined);

  var values = {
    arrayFinal: finalCharacterSet,
    arrayCheck: typeCheck,
    userLength: passwordLength
  }

  return values;
}

//Password generator  
function generatePassword(){

  var userValues = askQuestions();

  //Generate random array of characters
  passwordCharacters = [];
  for(var i = 0; i < userValues.userLength; i++){
    passwordCharacters.push(userValues.arrayFinal[Math.floor( Math.random() * Math.floor(userValues.arrayFinal.length) )]);
  }  
  for(var i = 0; i < userValues.arrayCheck.length; i++) {
    passwordCharacters[i] = userValues.arrayCheck[i];
  }

  //Make array into a string and return it for the writePassword function to use
  console.log(passwordCharacters);
  var realPassword = passwordCharacters.join('');
  return realPassword;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
