import { updateBalance } from "./update.balance.js"

export async function deleteTransaction(transactionContainer) {
    const transactions = document.querySelector('#transactions')
    const stringValue = transactionContainer.querySelector('.value-input').value
    const value = parseFloat(stringValue.replace(",", "."))

    const shouldDelete = confirm('Você tem certeza que deseja excluir a transação?')

    if(shouldDelete) {
        await fetch(`http://localhost:3000/transactions/${transactionContainer.dataset.number}`, {
            method: 'DELETE',
        })

        if (value < 0) {
            updateBalance(Math.abs(value))
        } else {
            updateBalance(-value)
        }

        transactions.removeChild(transactionContainer)
    }
}