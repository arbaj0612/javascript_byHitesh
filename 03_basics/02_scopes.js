// Global scope ==> var // we have access anywhere
// Block scope ==> let const we dont have access of the values outside the scopes (loops , if-else, functions)

let a = 300


if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner a: ", a); // 10
}

// console.log("Outer a: ", a); // 300

// console.log(a); // (error) a is not defined as it's a block scoped variable (let)
// console.log(b);   //(error) b is not defined as it's a block scoped variable (const)
// console.log(c);  // 30 global scoped (var)


function one () {
    const username = "Arbaj"
    function two () {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);  // not defined (error)
     two();
    
}
one();

if(true) {
    const username = "Mulani"
    if(username === "Mulani"){
        const website = " Instagram"
        console.log(username + website);
    }
    // console.log(website); //  error website is not defined
}
    // console.log(username); // error username is not defined


    //********************** intresting concept (Hoisting) **********************************

    console.log(addOne(6)); // 
    function addOne (num) {
        return num + 1
    }

    // console.log(addTwo(10));  // (error) Cannot access 'addTwo' before initialization
    const addTwo = function (num) {
        return num + 2
    }

    console.log(addTwo(10));