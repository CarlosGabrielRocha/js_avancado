const App = require("./entities/App");


const user1 = App.newUser('Carlos Gabriel Rocha de Santana', 'Carlosgabriel092003@gmail.com', '123456')
//console.log(user1)

const user2 = App.newUser('Dayse Rocha da Silva', 'Dayserocha123@gmail.com', '112233')
//console.log(user2)

App.newDeposit(1200, user1.email)

//console.log(user1.account.balance)

App.newLoan(2000, 5, user2.email)
console.log(user2.account.loans[0])
App.payInstallment(1, 0, user2.email)
//console.table(user2.account.loans[0])
//console.log(user2.account.balance)

console.log(user2.account.balance)

App.newTransfer(user1.email, user2.email, 200)
console.log(user1.account.balance)
console.log(user2.account.balance)

App.changeInterestRate(20)

App.newLoan(2000, 5, user2.email)
console.log(user2.account.loans[1])

console.log(user1.account)
