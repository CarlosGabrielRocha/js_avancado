import { renderTransaction } from "./render.elements.js"
import { handleKeyDown } from "./handle.keydown.js"
import { balanceVisibility, changeVisibility } from "./balance.visibility.js"

balanceVisibility.addEventListener('click', changeVisibility)

const nameInput = document.querySelector('#name')
const valueInput = document.querySelector('#value')
valueInput.addEventListener('keydown', handleKeyDown)
valueInput.addEventListener('contextmenu', (ev) => {
    ev.preventDefault()
})



// GET 

async function fetchTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const transactions = await response.json()
    transactions.forEach(renderTransaction)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions()
})

// POST 

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    if (valueInput.value === '') {
        alert('O valor não pode estar vázio!')
    } else {
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: nameInput.value, value: valueInput.value })
        }).then(res => res.json())

        renderTransaction(response)
        form.reset()
    }

})

