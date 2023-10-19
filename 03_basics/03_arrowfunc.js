// this keyword ==> it refers to the current context
  //  we are in node environment so this keyword refers to the empty object and in browser it refers to the
  //  global object i.e. window object

const user = {
    username : "Arbaj",
    id : 123,
    welcomeMessg : function (){
        console.log(`${this.username}, you just logged in with id: ${this.id}`);
        console.log(this);
    }
}

// user.welcomeMessg()
// user.username = "Aju"
// user.welcomeMessg()

// console.log(this);   //  {}


// ***************************** Arrow Function *****************************

// function getCoffee () {
//     let username = "Arbaj"
//     console.log(this.username); // undefined
// }

// getCoffee()

// const getCoffee = function () {
//     let username = "Arbaj"
//     console.log(this.username);  // undefined
// }

// getCoffee()


// const getCoffee = () => {
//     let username = "Arbaj"
//     console.log(this);  // {}
// }

// getCoffee()

// explicit return
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,5));



// implicit return 
// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(3,8));

//  const multTwo = (num1 , num2) => (num1 * num2)
// console.log(multTwo(2,3));

// returning object

// const newUser = (getobj) => ({username:"Arbaj"})
// console.log(newUser());


// Array 

const myArray = [1, 20, 30, 40, 46]

myArray.forEach((elm) => {
    console.log(elm + 2);
})


myArray.forEach((element)=>  console.log((element * 3)))

