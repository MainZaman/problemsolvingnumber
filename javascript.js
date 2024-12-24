// Question 01

// Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let number1 = 50;
let number2 = 60;
let maxNumber = Math.max(number1, number2);

console.log("Maximum Number:", maxNumber);

// Question 02

// Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let myNumber = 0;

if (myNumber > 0) {
  console.log("The number is positive:", myNumber);
} else if (myNumber < 0) {
  console.log("The number is negative:", myNumber);
} else if (myNumber == 0) {
  console.log("The number is zero:", myNumber);
}

// Question 03

// Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let number = 113;

if (number % 10 == 0) {
  console.log("The number is divisible by 10:", number);
} else {
  console.log("The number is not divisible by 10:", number);
}

// Question 04

// Solve the problem with Javascript  to check whether a number is even or odd.

let number3 = 9;

if (number3 % 2 === 0) {
  console.log("The number is even:", number3);
} else {
  console.log("The number is odd:", number3);
}

// Question 05

// Solve the problem with Javascript  to check whether a character is in the alphabet or not.

let char = "y";

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
  console.log("This is alphabet:", char);
} else {
  console.log("This is not alphabet:", char);
}

// Question 06

// Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

const tempValue = 29;

if (tempValue >= 30) {
  console.log("The temperature is hot:", tempValue);
} else if (tempValue <= 25) {
  console.log("The temperature is cold:", tempValue);
} else {
  console.log("The temperature is normal:", tempValue);
}

// Question 07

// Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let number4 = 30;
let number5 = 20;
let number6 = 50;

// let allNumbers = Math.max(number4, number5, number6);

if (number4 || number5 || number6) {
  console.log("The maximum number is:", Math.max(number4, number5, number6));
}

// Question 08

// Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let inputNumber = 25;

let isNumber = inputNumber%2==0;

if(isNumber){
  console.log("This is even number:", inputNumber);
}else{
  console.log("This is odd number:", inputNumber);
}


// Question 09

// Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 40;
let numTwo = 50;

if(numOne>=30 && numTwo>=30){
  console.log("Both greater than 30");
}else{
  console.log("Both is not greater than 30");
}


// Question 10

// Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age = 20;

if(age<=19 && age>=19){
  console.log("Teenager", age);
}else{
  console.log("Not a teenager:", age);
}