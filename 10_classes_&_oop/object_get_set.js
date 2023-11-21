const user = {
    _email : "aju@98.com",
    _password : "qwer",

    get email () {
        return this._email.toUpperCase()
    },

    set email (value) {
        this._email = value
    }
}

const jUser = Object.create(user)

console.log(jUser.email);
