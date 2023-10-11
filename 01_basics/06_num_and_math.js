const score  = 100
// console.log(score); // 100
// console.log(score.length); // undefined

const getScore = new Number(100)
// console.log(getScore); // [Number:100]

// console.log(getScore.toString().length); // we can get length of number by converting it into string
// console.log(getScore.toFixed(2)); // 100.00

const anotherNum = 10.6
// console.log(anotherNum.toFixed()); // 11
// console.log(anotherNum.toExponential()); // 1.06e+1

const decimal = 432.76 
// console.log(decimal.toPrecision(3)); // 433


const hundreds = 10000000 

// console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000 (indian way of units)

 

// *********************** Maths ********************************

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4 (abs method will not convert positive to negative)
// console.log(Math.round(23.9)); // 24
// console.log(Math.ceil(45.25)); // 46
// console.log(Math.floor(45.9)); // 45
// console.log(Math.min(8,4,5)); // 4
// console.log(Math.max(-2,-4,-5)); //-2


console.log(Math.random()); // always return value between range of 0 to 1

console.log(Math.random() * 10);  // here by multiplying a random number by 10 we can get value as 0 also

console.log(Math.random() * 10 + 1); // to avoid getting 0 we added 1

console.log(Math.floor(Math.random() * 10 + 1)); // to get the round of value

const max = 100
const min = 50

// console.log(Math.floor(Math.random() * (max - min) + min )); // to get the random number in range of 50 to 100
