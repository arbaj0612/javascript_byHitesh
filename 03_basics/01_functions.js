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

console.log(loginNewUser());