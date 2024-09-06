class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("O login foi realizado com sucesso!")
        } else {
            console.log("As credenciais inseridas, não estão corretas!")
        }
    }
}

const matheus = new User('Matheus Oliveira da Silva', 'Matheus456@gmail.com', 'matheus6776')

console.log(matheus)

const email = 'Matheus456@gmail.com'
const password = 'matheus6776'

matheus.login(email, password)