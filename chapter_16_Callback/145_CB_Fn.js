function cafe(item, callWhenTableIsReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableIsReady();
}

function callWhenTableIsReady() {
    console.log("calling 8981285245");

}

cafe("Burger", callWhenTableIsReady);

cafe("Pizza", function () {
    console.log("calling 7485890756");
})

cafe("Momos", () => {
    console.log("calling 8981285245");
});