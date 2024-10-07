const Account = require("./Account")
const App = require("./App")

module.exports = class User {
    #password 
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.#password = password
        this.account = new Account(this.email)
    }

    changePassword(currentPassword, newPassword) {
        if (currentPassword === this.#password && newPassword.length >= 6 && this.#password !== newPassword) {
            this.#password = newPassword
        } else if (currentPassword !== this.#password) {
            throw new Error('The informed password is wrong!')
        } else if (newPassword.length < 6) {
            throw new Error('Invalid password! It must be at least 6 characters long.')
        } else if(currentPassword === newPassword) {
            throw new Error('The current password is already registered as such! Please enter a different password.')
        }
    }

    /*get App() {
        return App
    } */
}