/* async function asyncSum(a, b) {
    return a + b 
}

async function asyncSubtract(a, b) {
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch((err) => {
    console.log(err)
})  */


const numbers = [4, 9, 5, 13, 12, 77]

async function asyncSquare(x) {
    return x * x
}

Promise.all(numbers.map(number => {
    const promise = asyncSquare(number)
    console.log(promise)
    return promise
}))

.then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
}) 