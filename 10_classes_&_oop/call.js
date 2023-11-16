function setUsername (username) {
    // complex db calls
    this.username = username
    console.log("setUsername called");
}

function createUsername (username, email, password) {
    // setUsername(username) // this is not enough to get access of the...
    // setUsername.call(username)  // username will only get reference of it


     setUsername.call(this, username)   // passing "this" now we can access the current excution context of setUsername func
    this.email = email
    this.password = password
}

const getUser = new createUsername("Arbaj" , "aj@cmcm.com" , "1234")

console.log(getUser);



