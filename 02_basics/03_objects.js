const obj = {
    name: "arbaj",
    "Full name" : "Arbaj Mulani",
    role: "Dev",
    id: 432,
    isLoggedIn: false,
    loginDays:["mon","wed"]
}

// console.log(obj.name); // accesing value with dot notation
// console.log(obj["name"]); // accesing value with brackets
// console.log(obj["Full name"]); // this is the only way , we cant use dot notation here


//Q- Declare and initialize a symbol and add it as a key in obj

const mysym = Symbol("key1")

const newObj = {
    name: "Junaid",
    desig: "Tso",
    age: 24,
    [mysym] : "0909"
}

// console.log(mysym); // 0909

// console.log(newObj.mysym); // undefined (wrong)
// console.log(newObj["mysym"]); // undefined (wrong)

// console.log(newObj[mysym]);  // correct way to access that key

newObj.desig = "Cco"
// Object.freeze(newObj) // freeze method doesnt allows to chnage any value of object 
newObj.desig = "Ssp" // no change in value

// console.log(newObj);

newObj.greeting = function (){
    console.log("Welocome Staff");
}

newObj.greeting2 = function (){
    console.log(`Welocome ${this.name}`);
}

// console.log(newObj.greeting); [Function (anonymous)] //it is only reference of function
// console.log(newObj.greeting());
// console.log(newObj.greeting2());