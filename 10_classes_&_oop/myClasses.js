// ES6 

// Classes

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass() {
        return `${this.password}#22`
    }

    changeUsername () {
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new user("Arbaj" , "aj123.com" , "0987")
console.log(userOne);
console.log(userOne.changeUsername());
console.log(userOne.encryptPass());


// behind the seen 

function createUSer (username, email , password) {
        this.username = username
        this.email = email
        this.password = password
}

createUSer.prototype.encryptPass = function () {
    return `${this.password}#22`
}

createUSer.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const userTwo = new createUSer("Junaid" , "aqop.com", "123")

console.log(userTwo);
console.log(userTwo.changeUsername());
console.log(userTwo.encryptPass());