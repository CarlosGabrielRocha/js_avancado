function calcImc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight === 'number' && typeof height === 'number') {
            const result = (weight / (height * height)).toFixed(2)
            resolve(result)
        } else {
            reject('Os parâmetros precisam ser do tipo number!')
        }
    }) 
}

function showImc(weight, height) {
    calcImc(weight, height).then((result) => {
        console.log(`Resultado: ${result}`)
        if (result < 18.5) {
            console.log('Situação: Magreza')
        } else if (result >= 18.5 && result <= 24.9) {
            console.log('Situação: Normal')
        } else if (result >= 25 && result <= 29.9) {
            console.log('Situação: sobrepeso') 
        } else if (result >= 30 && result <= 39.9) {
            console.log('Situação: Obesidade')
        } else {
            console.log('Situação: Obesidade Grave')
        }
    }).catch((err) => {
        console.log(`Resultado: ${err}`)
    }) 
        
    console.log('calculando IMC..')
}

showImc(54, 1.65)
showImc(54, 'gabriel')
showImc(200, 1.75)

