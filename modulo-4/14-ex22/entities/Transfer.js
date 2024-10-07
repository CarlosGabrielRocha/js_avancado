module.exports = class Transfer {
    constructor(sender, beneficiary, transferValue, createDate) {
        this.sender = sender
        this.beneficiary = beneficiary
        this.transferValue = transferValue 
        this.createDate = createDate
    }
}