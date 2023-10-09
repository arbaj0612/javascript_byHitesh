// Datatypes

// 1 ==> Primitive datatype

// Datatypes==> number , string , boolean , undefined , null , symbol , bigInt

let score = 50
let win = "yes"
let isPlaying = true
let player;
let newscore = null

console.log(typeof newscore); // typeof null is object

let myscore = Symbol(60)
let yourScore = Symbol(60)

console.log(myscore === yourScore);

const bigNumber  = 273487236793298865n
console.log( typeof bigNumber); // bigint


// 2 ==> Reference or Non-primitive datatypes

// Datatypes ==> Array , Object , functions

const fruits = ["mango" , "apple", "banana", "qivi"]
console.log(typeof fruits); // object



const myObj = {
    name: "arbaj",
    age : 23,
    id: 432,
    isWorking: true
}

console.log(typeof myObj); // object

const myfunction = function (){
    console.log("Hello World");
}

myfunction()

console.log(typeof myfunction); // function or (Object function)

