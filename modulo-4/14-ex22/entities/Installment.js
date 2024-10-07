module.exports = class Installment {
    constructor(installmentValue, installmentNumber, situation = "pending") {
        this.installmentValue = installmentValue
        this.installmentNumber = installmentNumber
        this.situation = situation
    }
}