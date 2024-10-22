function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4, 5, 9, 13, 77]

/* const squares = numbers.map(async (number) => { // O map retorna promises, msm que elas ainda n
    await waitFor(2)                            // tenham sido resolvida.
    return number * number
})
 

console.log(squares) // O resultado é um array de promises pendentes. O map não espera a executação das callbacks já que elas são async, por padrão, as funções async retornam uma promise (pending) imediatamente e é isso que o map irá retornar, um array de promises ainda pending, já que os 2 segundos não se passaram. O console.log também será executado antes dos 2 segundos, por tanto temos esse resultado.

Promise.all(squares).then(results => {
    console.log(results)
})
 */

async function execute() {

    console.time('end')

    const squares = await Promise.all(numbers.map(async (number) => { 
        await waitFor(2)                            
        return number * number
    }))

    console.log(squares)

    console.timeEnd('end')
}

execute() 




// teste

/* async function teste() {
    return 'promise finalizada'
}

async function executarTest() {
   const resultado = await teste()     
   console.log(resultado)
}

executarTest()
console.log('código síncrono') */