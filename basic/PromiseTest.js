/*
var promise = new Promise(function(resolve, reject) {
    console.log("Executed...");
    resolve("Test String");
});

promise.then(function(value) {
    console.log("Promise.then executed...");
    console.log(value);
});*/

var promise = new Promise(function(resolve, reject) {
    resolve("Ok");
    reject("Error");
    resolve("Ok again");
});
promise.then(function(value) {
    console.log(value);
    throw new Error("Error");
})
.catch(function(err) {
    console.log(err);
});

console.log("==========================");
console.log(promise);
console.log("==========================");

promise.then(function() {
    console.log("continue...");
});

console.log("asfsafasfsadfsafas");