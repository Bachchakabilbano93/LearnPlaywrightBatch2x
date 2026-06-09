// *****
// ****
// ***
// **
// *
// Print reverse

let n = 5;
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*"
    }
    console.log(row);
}

// Similar to Java without let variable
let p = 5;
for (let q = p; q >= 1; q--) {
    for (let r = 1; r <= q; r++) {
        process.stdout.write("*");
    }
    console.log();
}