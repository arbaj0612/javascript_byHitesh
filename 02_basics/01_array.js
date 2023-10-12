 // Array

 const arr = [1 , 2 , 4 , 6 , 7]
//  console.log(arr.length);

//  console.log(typeof arr); // Object

 const mixArr = [1, 2, "arbaj", true, [1, 2] ]
//  console.log(mixArr.length); // 5


 // Array methods

 const myArr = [2, 3, 5, 7, 1, 8, 4]

 myArr.push(10)
//  console.log(myArr);

 myArr.pop()
//  console.log(myArr);

myArr.unshift(1)
// console.log(myArr);

myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(12)); // false

// console.log(myArr.indexOf(13)); // -1 when there is no element present at any index thw output will come as -1

// Slice and Splice method

const newArr = [2, 3, 4, 5, 6, 7, 8, 1]
// console.log("A " , newArr);


const myn1 = newArr.slice(1,3)
// console.log(myn1); 
// console.log("B ", newArr); // slice method does not manupilate original array


const myn2 = newArr.splice(1,3) 

// console.log(myn2);
// console.log("C ", newArr); // splice method  manupilates original array and it also includes all elements between the range


const numArr = [1, 2, 3, 4, 5]
// console.log(numArr.join()); // 1,2,3,4,5 // here typeof datatype is string 
// console.log(typeof numArr);  // object



