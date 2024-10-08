const Loan = require("./Loan")
const User = require("./User")

module.exports = class App {

    static #users = []

    static findUser(userEmail) {
        return App.#users.find(user => user.email === userEmail)
    }

    static newUser(fullName, email, password) {

        const emailExists = App.findUser(email)

        if (!emailExists && password.length >= 6) {
            const newUser = new User(fullName, email, password)
            App.#users.push(newUser)
            return newUser
        } else if (emailExists) {
            throw new Error('The email is already being used by someone else!')
        } else if (password.length < 6) {
           throw new Error('Invalid password! It must be at least 6 characters long.')
        }
    }

    static changePassword(email, currentPassword, newPassword) {
        const user = App.findUser(email)
        if (user) {
            user.changePassword(currentPassword, newPassword)
        } else {
            throw new Error(`The email is not registered`)
        }       
    }

    static newDeposit(depositValue, userEmail) {
        const user = App.findUser(userEmail)
        if (user) {
            user.account.newDeposit(depositValue)
        } else {
            throw new Error(`The email is not registered`)
        }
    }

    static newTransfer(senderEmail, beneficiaryEmail, transferValue) {
        const senderUser = App.findUser(senderEmail)
        const beneficiaryUser = App.findUser(beneficiaryEmail)

        if (senderUser && beneficiaryUser) {
            senderUser.account.newTransfer(senderUser, beneficiaryUser, transferValue)
            beneficiaryUser.account.newTransfer(senderUser, beneficiaryUser, transferValue)
        } else if (!senderUser) {
            throw new Error(`The sender's email is not registered`)
        } else if (!beneficiaryUser) {
            throw new Error(`Beneficiary email is not registered`)
        }
    }

    static newLoan(loanValue, installmentsNumber, userEmail) {
        const user = App.findUser(userEmail)
        if (user) {
            user.account.newLoan(loanValue, installmentsNumber)
        } else {
            throw new Error(`The email is not registered`)
        }   
    }

    static payInstallment(installmentNumber, loanNumber, userEmail) {
        const user = App.findUser(userEmail)

        if (user) {
            user.account.payInstallment(installmentNumber, loanNumber)
        } else {
            throw new Error(`The email is not registered`)
        } 
    }

    static changeInterestRate(percentage) {
        Loan.interestRate = percentage
    }

}

