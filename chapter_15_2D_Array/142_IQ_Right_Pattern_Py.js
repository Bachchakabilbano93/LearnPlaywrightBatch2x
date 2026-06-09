// n = 3
// *
// * *
// * * *
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

// Similar to Java without let variable
let p = 5;
for (let q = 1; q <= p; q++) {
    for (let r = 1; r <= q; r++) {
        process.stdout.write("*");
    }
    console.log();
}
