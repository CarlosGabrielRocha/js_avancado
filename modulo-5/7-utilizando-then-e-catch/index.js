function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada..')
        setTimeout(() => {
            if (1 + 1 === 2) {
                reject('1 + 1 é igual a 2')
            } else {
                console.log('Resolvendo a promise..')
                resolve('Resultado')
            }
            
        }, 1000 * 2)
    })
}

execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado é: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})/* .finaly(() => {
    console.log('A promise foi finalizada.')
}) */