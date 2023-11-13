// Promise syntax 

// const promiseOne = new Promise(function (resolve , reject) {
//     Do async tasks
//     Db call , cryptography , network calls
// })


 const promiseOne = new Promise(function (resolve , reject) {
     console.log("Async task done");
     setTimeout(function() {
        console.log("Async task 2 done")
        resolve()
     } , 1000)
})
     

promiseOne.then(function () {
    console.log("Promise is consumed");
})


// it is not necessary to store a promise in a variable

new Promise( function (resolve , resject) {
    setTimeout(function() {
        console.log("Async task 3 done");
        resolve()
    } , 1000)
}).then(function () {
    console.log("Promise consumed again");
})





const promiseThree = new Promise ( function (resolve , reject ) {
    setTimeout(function () {
        console.log("Aync task 4 done");
        resolve ({username : "junaid" , email : "Juna@op.com"})
    },3000)
})


// promiseThree.then ( function (user) {
//     console.log(user);
//     console.log(user.email);
// })


promiseThree.then( (user) => {
    console.log(user);
    console.log(user.email);
})


const promiseFour = new Promise (function (resolve , reject) {
    setTimeout(function () {
        console.log("Async task 5 done");
        let error = true
        if (!error) {
            resolve({username: "Arbaj" , password: "1234"})
        } else {
            reject("ERROR : Something went wrong")
        }
    },4000)

}) 

promiseFour.then( (user) => {
    console.log(user);
    return user.password
}).then( (getPass) => {  // we have done the chaining here (accessing the above return value)
    console.log(getPass);
}).catch( (error) => {
    console.log(error);
}).finally( () => console.log("Promise is either resolved or rejected"));



const promiseFive = new Promise (function (resolve , reject) {
    setTimeout(function () {
        console.log("Async task 6 done");
        let error = true
        if (!error) {
            resolve({username: "Javascript" , password: "Js1234"})
        } else {
            reject("ERROR : js went wrong")
        }
    },5000)
})

// NOTE : async/await cant handle the errors directly so we have to wrap them in try and catch


async function consumPromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
    console.log(error);
    }
}

consumPromise()


async function getAllUsers () {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    // console.log(response)
   const data =   await response.json()
   console.log(data);
}

// getAllUsers()



fetch("https://api.github.com/users/arbaj0612")
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log("E :" , "got error"))
