import { updateBalance } from "./update.balance.js"
import { disableInputs, enableInputs } from "./disable.enable.inputs.js"

export function editTransaction(ev) {
    const transactionContainer = ev.currentTarget.parentNode.parentNode.parentNode
    const nameInput = transactionContainer.querySelector('.name-input')
    const valueInput = transactionContainer.querySelector('.value-input')

    const doneIcon = transactionContainer.querySelector('.done')
    const cancelIcon = transactionContainer.querySelector('.cancel')
    enableInputs(ev)

    // Pegando o valor do input antes do usuário digitar

    let oldName = nameInput.value // Caso não haja mudanças, o valor permanace
    let oldValue = valueInput.value
    nameInput.addEventListener('click', () => {
        oldName = nameInput.value   
        oldValue = valueInput.value
    }, {once: true})

    doneIcon.addEventListener('click', (ev) => {
        executeChange(ev, oldName, oldValue)
    }, {once: true})

    cancelIcon.addEventListener('click', (ev) => {
        nameInput.value = oldName
        valueInput.value = oldValue
        disableInputs(ev)
    }, {once: true})
}

async function executeChange(ev, oldName, oldValue) {
    const transactionContainer = ev.currentTarget.parentNode.parentNode.parentNode
    const nameInput = transactionContainer.querySelector('.name-input')
    const valueInput = transactionContainer.querySelector('.value-input')

    if (valueInput.value.length === 0) {
        alert('O valor não pode estar vázio!')
        nameInput.value = oldName
        valueInput.value = oldValue
        disableInputs(ev)
    } else {
        disableInputs(ev)
        await fetch(`http://localhost:3000/transactions/${transactionContainer.dataset.number}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: nameInput.value, value: valueInput.value })
        })
        const valueToAdd = parseFloat(valueInput.value.replace(",", ".")) - parseFloat(oldValue)
        updateBalance(valueToAdd)
    }
}