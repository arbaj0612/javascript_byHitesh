let username  = "Arbaj  "
 
// console.log(username.trim().length);
// console.log(username.trueLength()); // error...it is not a predefined function


const fakeHeros = ["thor" , "spiderman"]

const heroPower = {
    thor : "Hammer" ,
    spiderman : "sling" , 

    getfakePower : function () {
        console.log(`The power of thor is ${this.thor} `);
    }

}
// heroPower.getfakePower()

Object.prototype.getHero = function () {
    console.log("Spiderman is present");
}

// heroPower.getHero()

// fakeHeros.getHero()

Array.prototype.heyThor = function () {
    console.log("Thor is present");
}

// fakeHeros.heyThor()

// heroPower.heyThor() // it does have the access to this fuction 
const user = {
    username : "Arbaj", 
    email : "fake@demo.com"
}
const teacher = {
    takeClass : true
}

const teachingSuppot = {
    isAvailable :  false
}

const taSupport = {
    makeAssignment : "js work code",
    fulltime : false , 
    __proto__ : teacher  // using __proto__ to give access of another object's properties
}
console.log(taSupport.takeClass); // we can access the property of the user object 


teacher.__proto__ = user // using __proto__ to give access of another object's properties

console.log(teacher.email); // we can access the property of the user object 



// Modern Syntax for the same

Object.setPrototypeOf(teachingSuppot , teacher)

console.log(teachingSuppot.takeClass); // we can access the property of the techer object in teachingSupport


let myUsername = "Junaid    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`the true length is ${this.trim().length}`);
}

myUsername.trueLength()

"arbaj111".trueLength()