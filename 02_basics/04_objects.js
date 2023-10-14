// const instaUser = new Object() // this is singleton object OR
const instaUser = {}               // this is not singleton object

instaUser.username = "aj69"
instaUser.email = "aj@io.com"
instaUser.isLoggedIn = false
// console.log(instaUser);

const regularUser = {
    email: "xcx11@.com",
    fullname:{
        userFullname:{
            firstname: "arbaj",
            lastname: "mulani"
        }
    }

}

// console.log(regularUser.fullname.userFullname.firstname);

// concattin two different objects.....

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2} // using spread operator


// console.log(obj3);
// console.log(obj3.obj1[1]);



const users = [
    {
        id: 1,
        email: "abx.com"
    },
    {
        id: 2,
        email: "abvc.com"
    },
    {
        id: 3,
        email: "abxxz.com"
    },
    {
        id: 4,
        email: "abwex.com"
    },
]

// console.log(users[1].email) // accesing 


console.log(instaUser);

console.log(Object.keys(instaUser))  // we will get all keys un array format

console.log(Object.values(instaUser)); // we will get all values un array format

console.log((Object.entries(instaUser))); // here we get all keys and values in sub-arrays 

console.log(instaUser.hasOwnProperty("isLoggedIn")) 