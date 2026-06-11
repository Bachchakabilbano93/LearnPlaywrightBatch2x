function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, abirCallback) {
    console.log("Hi, You order is placed");
    abirCallback();
}

// First Way
placeOrder("Pizza", print);

// Sencond Way Anonymous Fn
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

// Third Way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});