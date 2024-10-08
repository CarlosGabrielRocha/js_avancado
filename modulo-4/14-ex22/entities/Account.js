const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
    #balance = 0
    constructor(email) {
        this.owner = email
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance() {
        return this.#balance
    }

    newDeposit(depositValue) {
        this.deposits.push(new Deposit(depositValue, new Date()))
        this.#balance += depositValue
    }

    newLoan(loanValue, installmentsNumber) {
        this.loans.push(new Loan(loanValue, new Date(), installmentsNumber))
        this.#balance += loanValue
    }

    payInstallment(installmentNumber, loanNumber) {
        this.loans[loanNumber].installments[installmentNumber].situation = 'paid'
        this.#balance -= this.loans[loanNumber].installments[installmentNumber].installmentValue
    }

    newTransfer(sender, beneficiary, transferValue) {

        this.transfers.push(new Transfer(sender, beneficiary, transferValue, new Date()))

        if (sender.email === this.owner) { 
            this.#balance -= transferValue
        } else {
            this.#balance += transferValue
        }

    }

}