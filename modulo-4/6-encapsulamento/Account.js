class Account {
    #password
    #balance = 1200
    constructor (user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if (this.#authenticate(email, this.#password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'Gabriel@gmail.com',
    password: '123'
}

const myAccount = new Account(user)
myAccount.password = 400



console.log(myAccount.getBalance("Gabriel@gmail.com", "123"))