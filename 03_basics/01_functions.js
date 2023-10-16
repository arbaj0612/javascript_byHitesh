// Simple function with function keyword

function myName () {
    console.log("A")
    console.log("R")
    console.log("B")
    console.log("A")
    console.log("J")
}

// myName();  // function calling

// function getSum (num1, num2){
//     console.log(num1 + num2);
// }

// getSum(3,5)

        // OR

function getSum (num1, num2) {
    let result = num1 + num2
    return result
    
}
//  const sumOf = getSum(4,8)
//  console.log(sumOf);


function getSub (num1, num2) {
    console.log(num1 - num2);
    return num1 - num2  
    // console.log(num1 - num2);   // after return keyword there is no further execution of function
}
 getSub(9,4)


// function loginUserMessg (username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessg("Arbaj"));


function loginNewUser (username = "user") {  // default parameter
    if(username === undefined){
        return "please Login"
    }
    return `${username} just logged in`
}

// console.log(loginNewUser());



// use of rest operator in functions

function newNum (...nums) {
    return nums
}

// console.log(newNum(200,100,320,450));


const newUser = {
    fname: "Arbaj",
    price: 300
}

function handleObj (anyObj){
    console.log(`username is ${anyObj.fname} and price is ${anyObj.price}`);
}

handleObj(newUser)
     // OR

// handleObj({fname:"junaid", price: 450})

const myNewArray = [200, 300, 100, 400, 500]

function fReturnValue (getArray){
    return getArray[0]
}

console.log(fReturnValue(myNewArray)); // Or

console.log(fReturnValue([100, 300, 100, 400, 500]));