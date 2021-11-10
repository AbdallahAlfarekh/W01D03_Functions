console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//Figure out the syntax errors in the following functions, and fix them
//1- const myFunction = function parameter) {}
const myFunction = function (parameter) {}
//2- Second Function = function (parameter) {}
const SecondFunction = function (parameter) {}
// 3-const function = function (parameter) {}
const function1 = function (parameter) {}
//4- const functionName = function (paramOne paramTwo) {}
const functionName = function (paramOne , paramTwo) {}

//2- Write a function sayHello that returns Hello when executed
// const sayHello = function () {  // TODO: Your code here};// 
const sayHello = function () { console.log("Hello")}
//an example of the output value when executing the functionsayHello(); // => "Hello"

//Write a function myAge that accepts one argument age and returns the age when executed.

//const myAge = function (age) {
  // TODO: Your code here
  const myAge = function (age) { return (32) }
// an example of the output value when executing the function

//4- 
const incrementOne = function (number) { return (number+1)}

//5- 
const greet = function (name) {return "Hello " + name }

//Practice

//1-
const double = function (number) { ruturn (number*2) }

//2-
const fullName = function (firstName, lastName) { return (firstName+LastName)}

//3- 
const average = function (a, b) { return ((a+b)/2)}

//4-

const square = function (number) {
    return number * number;
  };
  const cube = function (number) {
    return number * number * number;
  };
  // guess the following before trying it in the console
  cube(25) + 20; // => 15645
  square(5) + cube(2); // => 25 + 8 = 33
  square(10 / 5) + cube(2 + 1); // => 4 + 27 = 31
  average(square(average(6, 2)), cube(4)); // => 40

  //5-

  const totalBill = function (total, taxPercentage, tip) {
return (total + taxPercentage + tip )    // TODO: Your code here
  };
  totalBill(40, 0.16, 2); // => 48.4
  totalBill(10, 0.16, 0); // => 11.6

  //6-
  const ageInHours = function (ageInYears) {

    // TODO: Your code here
    return (ageInYears * 365 * 24 )
  };
  ageInHours(10); // => 87600
  ageInHours(19); // => 166440

  //07-

  const calculateProfit = function (unitsSold, unitCost, unitPrice) {
    // TODO: Your code here
    return (unitsSold * (unitPrice - unitCost))
  };
  calculateProfit(1, 3, 5); // => 2
  calculateProfit(4, 2, 5); // => 12
  calculateProfit(10, 5, 15); // => 100

  //08-

  const floor = function (number) {
    // TODO: Your code here
    return ( Math.floor(number))
  };
  // the rounding is to the smallest number
  floor(5); // => 5
  floor(2.4); // => 2
  floor(0.2); // => 0
  floor(1.7); // => 1

  //9-

  const toThePowerOf = function (base, exponent) {
      return Math.pow(base, exponent )
    // TODO: Your code here
  };
  toThePowerOf(2, 2); // => 4
  toThePowerOf(2, 3); // => 8
  toThePowerOf(4, 2); // => 16

  //10-
  const upperCase = function (string) {
    // TODO: Your code here
    return UpperCase ("String")
  };
  //upperCase("john"); // => "JOHN"
  //upperCase("cat"); // => "CAT"
  //upperCase("DOG"); // => "DOG"

  


