// Q: Can you change the value of Pi in js

// ==> answer is NO

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

console.log(descriptor);


const myObj = {
    name: "Arbaj" ,
    id : "123" ,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(myObj , "name"));

const chnageProperty = Object.defineProperty(myObj , "name" , {
    writable: false,
    enumerable : false
}) 

console.log(chnageProperty);

for (let [key , value] of Object.entries(myObj)) {
    console.log(`${key} : ${value}`); // will not get the key value pair of name property
}

myObj.name = "Junaid"

console.log(myObj.name);  // NOW WE CANT overwrite the value of name property as we have define the writable
                        // property as false