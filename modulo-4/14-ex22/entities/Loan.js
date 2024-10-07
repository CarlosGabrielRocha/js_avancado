const Installment = require("./Installment")

module.exports = class Loan {
    static #interestRate = 10

    constructor(loanValue, createDate, installmentsNumber) {
        this.loanValue = loanValue
        this.createDate = createDate
        this.installmentsNumber = installmentsNumber
        this.installments = this.calcInstallments(installmentsNumber, loanValue)
    }

    static get interestRate() {
        return this.#interestRate
    }

    static set interestRate(value) {
        if (typeof value === 'number') {
            this.#interestRate = value
        } else {
            throw new Error('INVALID VALUE! [must be a number]')
        }
    }

    calcInstallments(installmentsNumber) {
        const fee = this.calcInterestedRate()
        const InstallmentValue = ((this.loanValue + fee) / installmentsNumber).toFixed(2)
        const installments = []
        for (let c = 1; c <= installmentsNumber; c++) {
            installments.push( new Installment(InstallmentValue, c) )
        }

        return installments
    }

    calcInterestedRate() {
        return (Loan.#interestRate / 100) * this.loanValue
    }
}

