class User {
    constructor(username) {
        this.username = username
    }

    logMe () {
        console.log(`Hello ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username , age , gender) {
        super(username)
        this.age = age 
        this.gender = gender
    }

    addCourse () {
        console.log(`${this.username} added course of js`);
    }
}


const userOne = new Teacher("Aj" , 34 , "male")
console.log(userOne);

userOne.addCourse()

userOne.logMe()

const userTwo = new User("Junaid")

// userTwo.addCourse() //it doesnt have access
userTwo.logMe()

console.log(userOne instanceof Teacher); // true
console.log(userOne instanceof User); // true

console.log(userTwo instanceof User);// true
console.log(userTwo instanceof Teacher); // false