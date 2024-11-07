import { updateBalance } from "./update.balance.js"

const balanceSpan = document.querySelector('#balance')
export const balanceVisibility = document.querySelector('#balance-visibility')

export function changeVisibility() {
    if (balanceVisibility.dataset.visibility === 'on') {
        balanceVisibility.src= 'midia/visibility_off.svg'
        balanceSpan.innerText = ''
        balanceVisibility.dataset.visibility = 'off'
    } else {
        balanceVisibility.src = 'midia/visibility.svg'
        balanceVisibility.dataset.visibility = 'on'
        updateBalance(0) // Apenas irá colocar o texto no span de saldo novamente, sem adicionar valor
    }
}