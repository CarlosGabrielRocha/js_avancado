function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try { // Tenta executar
console.log(sum(2, 9))
console.log(sum(true, 14))
//console.log(sum(undefined, 22))
console.log(sum(18, "0"))
console.log(sum(39, null))
//console.log(sum(13, "zero"))
} catch (error) { // Captura o erro ocorrido (que pode ser usado como parâmetro) e executa o bloco.
    console.log('An error ocurred!')
    console.log(error.message)
} finally { // Sempre será executado, independente de um erro ou não.
    console.log('Calculations finished')
}

