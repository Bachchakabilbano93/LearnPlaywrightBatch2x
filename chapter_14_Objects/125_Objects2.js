// Objects
// Key and value

let student1 = { name: "Amit", age: 30 };
let student2 = { name: "Abir" };
let student3 = { name: "Abir", age: 32, phone: 8981285245 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Abir", "age": 32, "phone": 8981285245 };

let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}