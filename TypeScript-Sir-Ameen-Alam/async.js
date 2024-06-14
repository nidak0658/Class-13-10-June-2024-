// Part 1
/* let PubG
PubG = "I am playing PUBG, please provide protocol AC room with Biryani and Ice Cream"
console.log(PubG);
function GetColdDrink(){
    return "NHI HAI"
}
console.log(GetColdDrink); // NHI HAI
(GetColdDrink)(); // (Larki Code)->(This Line) */
// Part 2
// let PubG - Declare
/* let PubG = "I am playing PUBG, please provide protocol AC room with Biryani and Ice Cream"
console.log(PubG, "PUBG");
// function GetColdDrink - Declare
function GetColdDrink(){
    return "NHI HAI"
}
console.log(GetColdDrink(), "GET COLD") // NHI HAI */
// Part 3
/* function makePizza(){
    let order = "Your Pizza is being prepared"
    console.log(order, "Kitchen");
    return order
}

let shahab = makePizza()
console.log(shahab, " Table 1 ");
let ahmed = makePizza()
console.log(ahmed, " Table 2 "); */
// Part 4
/* function makePizza(){
    console.log("Your Pizza is being prepared");
}

let makePizzaNew = () => "Your Pizza is being prepared"
console.log(makePizzaNew(), " Table 3 "); */ 

// (Test For Sir Ameen Alam)

// It looks like you're trying to create a new promise, but there are a few issues with the code.
// First, the correct syntax is new Promise, not newPromise. Also, the promise constructor takes a callback function that resolves or rejects the promise, but you've passed an empty callback.
// Here's a corrected version:
var SirZIAPromise = new Promise(function (resolve, reject) {
    // Your promise logic goes here
    // Call resolve() to fulfill the promise
    // Call reject() to reject the promise
});
// If you're not doing anything asynchronous, you can simply resolve the promise immediately:
var SirZIAPromise = new Promise(function (resolve, reject) {
    resolve("Your promise has been fulfilled!");
});
// Or, if you want to simulate a delayed resolution:
var SirZIAPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Your promise has been fulfilled!");
    }, 1000);
});
// Remember to handle the promise using then and catch methods:
SirZIAPromise.then(function (value) { return console.log(value); }).catch(function (error) { return console.error(error); });
