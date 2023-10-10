const name = "Arbaj"

const greet = "Good Morning"

// console.log(`Hey ${greet} dear ${name}`);

// declaring a string using new keyword

const mystr = new String("Frontend Dev") // calling as constructor and we get string Object
// console.log(mystr);

console.log(mystr.__proto__); // {}

const str = "Football"
// console.log(str.__proto__);  // {}


// String Methods

// console.log(str.length) // 8
// console.log(str.charAt(7)) // 8
// console.log(str.includes("n")) // false
// console.log(str.toUpperCase()) // FOOTBALL



const myStr = "I am a Frontend Developer"

const newStr = myStr.replace("Frontend","Backend")

// console.log(myStr); // there will no changes in original string (Heap-memory)
// console.log(newStr); // I am a Backend Developer

const badStr = "  Hello Dev  "

const goodStr = badStr.trim()

// console.log(goodStr);


const regStr = "Hey Bro"

// console.log(regStr.slice(0,3));
// console.log(regStr.slice(-3,7)); // We Can put negative index in slice method

// console.log(regStr.substring(3,7)); // we can put negative index in substring method but output will same as in positive index


// console.log(regStr.indexOf("o"));

const checkStr = "Are you a Good man Or Good girl"
console.log(checkStr.startsWith("are"));  // false
// console.log(checkStr.endsWith("man?" , 19));  // returns boolean values


// console.log(checkStr.lastIndexOf("Good",15)); // (searchString , limit)

//lastIndexOf method helps to specify the the last occurence of given string
