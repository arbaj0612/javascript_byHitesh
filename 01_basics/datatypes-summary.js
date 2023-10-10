// Datatypes

// 1 ==> Primitive datatype

// Datatypes==> number , string , boolean , undefined , null , symbol , bigInt

let score = 50
let win = "yes"
let isPlaying = true
let player;
let newscore = null

// console.log(typeof newscore); // typeof null is object

let myscore = Symbol(60)
let yourScore = Symbol(60)

// console.log(myscore === yourScore);

const bigNumber  = 273487236793298865n
// console.log( typeof bigNumber); // bigint


// 2 ==> Reference or Non-primitive datatypes

// Datatypes ==> Array , Object , functions

const fruits = ["mango" , "apple", "banana", "qivi"]
// console.log(typeof fruits); // object



const myObj = {
    name: "arbaj",
    age : 23,
    id: 432,
    isWorking: true
}

// console.log(typeof myObj); // object

const myfunction = function (){
    // console.log("Hello World");
}

myfunction()

// console.log(typeof myfunction); // function or (Object function)




//******************************** Stack and Heap memory *********************************

// Stack (Primitive values)
let myAge = 22

let yourAge = myAge
yourAge = 24

console.log(myAge);
console.log(yourAge); 

// In stack memory allocation we get copy of the variables so here when we changed the value of yourAge it does not change the 
// value of variable myAge


// Heap (Non - Primitive)

let user1 = {
    email: "aj009@gmail.com",
    upi: "1234@ybl"
}

let user2 = user1

user2.email = "am@yahoo.com"

console.log(user1.email);
console.log(user2.email);

// In heap memory allocation we get the reference of the values so whenever we change value of duplicates it will also affect the 
// original ones 