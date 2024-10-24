async function calcImc(weight, height) {
    if (typeof weight === 'number' && typeof height === 'number') {
        return (weight / (height * height)).toFixed(2)
    } else {
        return Promise.reject('Os parâmetros precisam ser do tipo number!')
    }
}

async function showImc(weight, height) {

    try {
        const result = await calcImc(weight, height)
        console.log('Calculando IMC..')
        console.log(`Resultado: ${result}`)
        if (result < 18.5) {
            console.log('Situação: Magreza')
        } else if (result <= 24.9) {
            console.log('Situação: Normal')
        } else if (result <= 29.9) {
            console.log('Situação: sobrepeso')
        } else if (result <= 39.9) {
            console.log('Situação: Obesidade')
        } else {
            console.log('Situação: Obesidade Grave')
        }
    } catch (err) {
        console.log(`Resultado: ${err}`)
    }

}

showImc(54, 1.65)
showImc(54, 'gabriel')
showImc(200, 1.75)




