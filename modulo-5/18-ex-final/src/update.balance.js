export let balance = 0.00

export function updateBalance(value) {
    const balanceVisibility = document.querySelector('#balance-visibility')
    const balanceSpan = document.querySelector('#balance')
    const stringValue = value.toString()
    const valueToAdd = parseFloat(stringValue.replace(",", "."))
    balance += valueToAdd
    if (balanceVisibility.dataset.visibility === 'on') {
        balanceSpan.innerText = `R$: ${balance.toFixed(2)}`
    }
}