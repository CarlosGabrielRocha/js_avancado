export function disableInputs(ev) {
    const transactionContainer = ev.currentTarget.parentNode.parentNode.parentNode
    const nameInput = transactionContainer.querySelector('.name-input')
    const valueInput = transactionContainer.querySelector('.value-input')
    const doneIcon = transactionContainer.querySelector('.done')
    const cancelIcon = transactionContainer.querySelector('.cancel')

    doneIcon.style.opacity = 0
    doneIcon.style.pointerEvents = 'none'
    cancelIcon.style.opacity = 0
    cancelIcon.style.pointerEvents = 'none'

    nameInput.setAttribute('disabled', '')
    valueInput.setAttribute('disabled', '')
}

export function enableInputs(ev) {
    const transactionContainer = ev.currentTarget.parentNode.parentNode.parentNode
    const nameInput = transactionContainer.querySelector('.name-input')
    const valueInput = transactionContainer.querySelector('.value-input')

    nameInput.removeAttribute('disabled')
    valueInput.removeAttribute('disabled')
    nameInput.focus()

    const doneIcon = transactionContainer.querySelector('.done')
    const cancelIcon = transactionContainer.querySelector('.cancel')

    doneIcon.style.pointerEvents = 'auto'
    doneIcon.style.opacity = 1
    cancelIcon.style.pointerEvents = 'auto'
    cancelIcon.style.opacity = 1
}
