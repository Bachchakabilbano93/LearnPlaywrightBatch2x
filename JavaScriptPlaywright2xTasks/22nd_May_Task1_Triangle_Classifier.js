// ✅ Triangle Classifier:
// Write a program that classifies a triangle based on its side lengths.
// Given three input values representing the lengths of the sides, determine if the triangle
// is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene
// (no sides are equal). Use an if-else statement to classify the triangle.

let a = 10;
let b = 15;
let c = 10;

if (a + b > c && b + c > a && c + a > b) {
    if (a === b && b === c) {
        console.log("The triangle is equilateral.");
    } else if (a === b || b === c || a === c) {
        console.log("The triangle is isosceles.");
    } else {
        console.log("The triangle is scalene.");
    }
} else {
    console.log("The triangle is not valid.");
}


