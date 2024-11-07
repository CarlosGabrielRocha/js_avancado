import { createElement, textElement, midiaElement, label, input } from "./create.elements.js"
import { updateBalance } from "./update.balance.js"
import { editTransaction } from "./edit.transaction.js"
import { deleteTransaction } from "./delete.transaction.js"
import { handleKeyDown } from "./handle.keydown.js"
const transactions = document.querySelector('#transactions')

export function renderTransaction(transaction) {
    updateBalance(transaction.value)
    const transactionContainer = createElements(transaction)
    transactions.appendChild(transactionContainer)
}

export function createElements(transaction) {
    const transactionContainer = createElement('div', `transaction-container${transaction.id}`, 'transaction-container')
    transactionContainer.dataset.number = transaction.id

    const transactionTitle = textElement('h1', transaction.name, '', 'transaction-title')
    const transactionHeader = createElement('div', '', 'transaction-header')
    const transactionOptContainer = createElement('div', '', 'transaction-opt-container')
    const doneTransactionIcon = midiaElement('img', 'midia/done_icon.svg', 'pronto', '', 'done', 'transaction-opt-icon')
    const cancelChangeIcon = midiaElement('img', 'midia/cancel.svg', 'cancelar', '', 'cancel', 'transaction-opt-icon')
    const editTransactionIcon = midiaElement('img', 'midia/edit_icon.svg', 'editar', '', 'transaction-opt-icon', 'edit-transaction')
    const deleteTransactionIcon = midiaElement('img', 'midia/delete_icon.svg', 'deletar', '', 'transaction-opt-icon', 'delete-transaction')

    deleteTransactionIcon.addEventListener('click', editTransaction)  
    transactionOptContainer.append(doneTransactionIcon, cancelChangeIcon, editTransactionIcon, deleteTransactionIcon)
    transactionHeader.append(transactionTitle, transactionOptContainer)

    const nameContainer = createElement('div', '', 'name-container')
    const nameLabel = label(`name-input${transaction.id}`, 'Nome:')

    const nameInput = input('text', transaction.name, [{name: 'disabled', value: ''}], `name-input${transaction.id}`, 'name-input')
    nameContainer.append(nameLabel, nameInput)

    const valueContainer = createElement('div', '', 'value-container')
    const valueLabel = label(`value-input${transaction.id}`, 'Valor:')

    const valueInput = input('text', parseFloat(transaction.value).toFixed(2), [{name: 'disabled', value: ''}], `value-input${transaction.id}`, 'value-input')
    valueContainer.append(valueLabel, valueInput)


    transactionContainer.addEventListener('mouseenter', () => {
        transactionOptContainer.style.opacity = 1
    })
    transactionContainer.addEventListener('mouseleave', () => {
        transactionOptContainer.style.opacity = 0
    })
    editTransactionIcon.addEventListener('click', editTransaction)
    deleteTransactionIcon.addEventListener('click', () => {
        deleteTransaction(transactionContainer)
    })
    valueInput.addEventListener('keydown', handleKeyDown)

    transactionContainer.append(transactionHeader, nameContainer, valueContainer)
    return transactionContainer
}
