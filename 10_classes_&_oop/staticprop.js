class User {
    constructor(name) {
        this.name = name
    }

    logMe () {
        console.log(`username : ${this.name}`);
    }

     static createId () {
        console.log("123");
    }
}

const newUser = new User("Junaid")
newUser.logMe()
// newUser.createId() // bcoz of the static keyword there is no access of this method


class Teacher extends User {
    constructor(name, email) {
        super(name)
        this.email = email

    }

    register() {
        console.log(`${this.name} registered`);
    }


}

const newTeaher = new Teacher("john" , "aapp.com")

newTeaher.register()

// newTeaher.createId() // bcoz of the static keyword we cant inherit this method