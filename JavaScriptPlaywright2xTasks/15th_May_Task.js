// Maximum number between two numbers by using the ternary operator
let a = 10;
let b = 20;
let maxofTwo = a > b ? a : b;
console.log("Maximum of two:", maxofTwo);

// Maximum number between the three numbers also by using ternary operator
let c = 15;
let maxofThree = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log("Maximum of three:", maxofThree);