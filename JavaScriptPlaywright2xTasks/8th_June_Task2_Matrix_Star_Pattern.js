// Question 2
//   *
//  ***
// *****
let n = 3;
for (i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }
    for (let k = 0; k < (2 * i + 1); k++) {
        row += "*"
    }
    console.log(row);
}

// Similar to Java without let variable
let p = 3;
for (q = 0; q < p; q++) {
    for (let r = 0; r < p - q - 1; r++) {
        process.stdout.write(" ");
    }
    for (let s = 0; s < (2 * q + 1); s++) {
        process.stdout.write("*")
    }
    console.log();
}
