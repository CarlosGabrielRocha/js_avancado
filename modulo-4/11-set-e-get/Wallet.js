class Wallet {
    #amount
    #username
    constructor() {
        this.#amount = 100.99 * 100 //10099
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) { // myWallet.username = newUsername
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log("username must be of type string")
        }
    }

    get username() {
        return this.#username
    }

    /*amount() {
        return this.#amount / 100
    }*/
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = 'Gabriel'
console.log(myWallet.username)

myWallet.username += ' Rocha'
console.log(myWallet.username)

myWallet.username = true