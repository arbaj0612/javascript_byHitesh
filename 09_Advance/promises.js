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
        let error = true
        if (!error) {
            resolve({username: "Arbaj" , pass: "1234"})
        } else {
            reject("ERROR : Something went wrong")
        }
    },4000)

}) 

promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then( (getUserName) => {
    console.log(getUserName);
}).catch( (error) => {
    console.log(error);
}).finally( () => console.log("Promise is either resolved or rejected"));


