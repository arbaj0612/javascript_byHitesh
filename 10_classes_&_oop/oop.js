const user = {
    username : "Arbaj" , 
    loginCount : 7 , 
    isLoggedIn : true ,

    getUserDetails : function () {
        // console.log("Got user details from the database");
        // console.log(this.username);
        // console.log(this); // this refers to the current execution context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function newUser (username , loginCount , isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.getUserdetails = function () {
        console.log(`Hello ${this.username} your loginCount is ${this.loginCount}`);
    }
    //  return this
}

// const userOne =  newUser("Arbaj" , 6 , true )
// const userTwo = newUser("junaid", 4 , false) 

// console.log(userOne); // here values of userTwo will be overWrited

// To avoid that we will use new keyword 
// NOTE ==> In JavaScript, the new keyword is used to create an instance of an object
//          that is defined by a constructor function or a class. 
//          When you use new before calling a function, 
//          it changes the behavior of that function, turning it into a constructor.


const userOne = new newUser("Arbaj" , 5 , false)
const userTwo = new newUser("junaid" , 3 , true)

console.log(userOne);
console.log(userTwo);




// The new keyword does the following:

// ==> Creates a new empty object.
// ==> Sets the value of this to be that new object.
// ==> Calls the constructor function or the constructor method of the class,
//      which modifies this (the newly created object) with new properties and methods.
// ==> Returns the newly created object.