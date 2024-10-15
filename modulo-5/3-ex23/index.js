const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')


function verifyName(name) {
    const specialCharacter = /\W/g
    const number = /\d/
    const specialCharacterArray = name.match(specialCharacter)
    const hasNumber = number.test(name)

    const hasSpecialCharacter = specialCharacterArray.filter(character => character !== " ")

    if(hasSpecialCharacter[0]) {
        throw new Error('The name can not have special character')
    } else if(hasNumber) {
        throw new Error('The name can not have numbers')
    }
}

function verifyEmail(email) {
    const regex = /^[a-z\d\_]{2,}@[a-z]{2,}\.[a-z]{2,63}$/i
    const validEmail = regex.test(email)
    if (!validEmail) {
        throw new Error('Invalid email')
    }
}

function verifyPassword(password) {
    const uppercaseLetter = /[A-Z]/
    const lowercaseLetter = /[a-z]/
    const number = /\d/
    const specialCharacter = /\W/
    const eightCharacter = /.{8,}/

    const hasUppercaseLetter = password.match(uppercaseLetter)
    const hasLowercaseLetter = password.match(lowercaseLetter)
    const hasNumber = password.match(number)
    const hasSpecialCharacter = password.match(specialCharacter)
    const hasEightCharacter = password.match((eightCharacter))

    if(!hasEightCharacter) {
        throw new Error('No eight character')
    } else if(!hasUppercaseLetter) {
        throw new Error('No uppercase letter')
    } else if(!hasLowercaseLetter) {
        throw new Error('No lowercase letter')
    } else if(!hasNumber) {
        throw new Error('No number')
    } else if(!hasSpecialCharacter) {
        throw new Error('No special character')  
    }
}

form.addEventListener('submit', ev => {
    ev.preventDefault()

    try {
        verifyName(nameInput.value)
        verifyEmail(emailInput.value)
        verifyPassword(passwordInput.value)
        register()
    } catch (error) {
        switch(error.message) {
            case 'The name can not have special character':
                alert('O nome não pode conter caracteres especiais!')
            break

            case 'The name can not have numbers':
                alert('O nome não pode conter números!')
            break

            case 'Invalid email': 
                alert('Email inválido! Formato aceito: xx@xx.xx')
            break

            case 'No eight character':
                alert('A senha precisa ter pelo menos oito caracteres!')
            break

            case 'No uppercase letter':
                alert('A senha precisa ter pelo menos uma letra maiúscula!')
            break

            case 'No lowercase letter':
                alert('A senha precisa ter pelo menos uma letra minúscula!')
            break

            case 'No number':
                alert('A senha precisa ter pelo menos um número!')
            break

            case 'No special character':
                alert('A senha precisa ter pelo menos um caractere especial!')
            break
        }
    }  



})

function register() {
    nameInput.value = ''
    emailInput.value =  ''
    passwordInput.value = ''

    alert('Cadastro efetuado com sucesso!')
}

