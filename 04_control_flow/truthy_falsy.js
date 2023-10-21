
// const userEmail = "Aju@9089.com"

// if (userEmail) {
//     console.log("Got userMail");
// } else {
//     console.log("invalid account");
// }

// const arr = []

// if (arr) {
//     console.log("Got arrr");
// } else {
//     console.log("invalid ");
// }

// falsy values
 // false , 0 , -0, "" , bigInt, 0n,  null, undefined, NaN

// Truthy values
 //  true, 1, "0", "false",  " " , [] , {} , function(){}

// To verify that a given array is empty or what
// const newArr = []
// if (newArr.length === 0){
//     console.log("Array is empty");
// } else {
//     console.log("there are values");
// }

// To verify that a given obj is empty or what

// const myObj = {}
// if ( Object.keys(myObj).length === 0) {
//     console.log("Object is empty");
// } else {
//     console.log("there are values");
// }

// console.log(Object.keys(myObj)); // we get array of keys ["name"]

// Some intresting comparisons ==>
// console.log(0 == ""); // true
// console.log(0 == false); // true
// console.log( 0 == " "); // true
// console.log(0 == "false"); // false
// console.log(" " == true); // false
 

// nullish coalescing opertor (??) :  null undefined

// let val1;
// console.log(val1); // undefined
// val1 = 5 ?? 10  // 5
// val1 = 10 ?? 5 // 10
// val1 = null ?? 21 // 21
// val1 = undefined ?? null // null
// val1 = null ?? undefined // undefined
// val1 = null ?? 10 ?? 20 // 10

// console.log(val1);

// terniary opertor
// syntax
// condition ? true : false

const coffeePrice = 100
coffeePrice <= 100 ? console.log("Affordabale") : console.log("not Affordable")

