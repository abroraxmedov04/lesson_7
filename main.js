// elform.addEventListener("submit", function (eve) {
//   eve.preventDefault();
// });
// elform.addEventListener("submit", function (evet) {
//   evet.preventDefault();
//   var inputVal = elInput.value.trim();
//   if (inputVal.charAt(0) == inputVal.charAt(0).toUpperCase()) {
//     console.log("ha bu katta harfda");
//   }
//   if (inputVal.charAt(0) !== inputVal.charAt(0).toUpperCase()) {
//     console.log("yoq bu kichik harfda");
//   }
//   if(inputVal === " ") {
//     console.log("not valid");
//   }
// });

// var elform = document.querySelector(".js-form");
// var elInput = elform.querySelector(".js-input");
// var elBtn = elform.querySelector(".js-btn");

// let numberFirst = Number(prompt("Enter first num"));
// let numberSecond = Number(prompt("Enter first num"));
// let numberThird = Number(prompt("Enter first num"));



// ------------------------------------------------------------------- //

// function findMiddleNumber(num1, num2, num3) {
//   let numbers = [num1, num2, num3];
//   numbers.sort((a, b) => a - b);
//   return numbers[1];
// }
// let middleNumber = findMiddleNumber(numberFirst, numberSecond, numberThird);
// console.log(middleNumber);


// task 4 for homework
var firstNumber = Number(prompt("Enter a value"));
var secondNumber = Number(prompt("Enter a value"));
var thirdNumber = Number(prompt("Enter a value"));

if (
  (firstNumber > secondNumber && firstNumber < thirdNumber) ||
  (firstNumber < secondNumber && firstNumber > thirdNumber)
) {
  console.log(firstNumber);
} else if (
  (secondNumber > firstNumber && secondNumber < thirdNumber) ||
  (secondNumber < firstNumber && secondNumber > thirdNumber)
) {
  console.log(secondNumber);
} else if (
  (thirdNumber > firstNumber && thirdNumber < secondNumber) ||
  (thirdNumber < firstNumber && thirdNumber > secondNumber)
) {
  console.log(thirdNumber);
} else {
  console.log(-1);
}
