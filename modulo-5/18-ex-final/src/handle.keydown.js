

export function handleKeyDown(ev) {
    ev.preventDefault()
    const input = ev.currentTarget
    
    const regex = /[^0-9.-]/g
    const cursorPosition = input.selectionStart // Posição do cursor
    
    if (regex.test(ev.key)) {
        input.value = input.value.replace(ev.key, '')
    } else if (!regex.test(ev.key) && input.value.length < 10) {
        const valueArray = input.value.split("")
        console.log(valueArray)
        valueArray.splice(cursorPosition, 0, ev.key)
        console.log(valueArray)
        input.value = valueArray.join("")
        input.setSelectionRange(cursorPosition + 1, cursorPosition + 1) // Setando posição do cursor
    }
    
    if (ev.key === 'Backspace' || ev.key === 'Delete') {
        const valueArray = input.value.split("")
        const newValue = valueArray.filter((element, indexof) => {
            if (indexof !== cursorPosition - 1) {
                return true
            } else {
                return false
            }
        })

        input.value = newValue.join("")
        input.setSelectionRange(cursorPosition - 1, cursorPosition - 1)
    }

    switch(ev.key) {
        case 'ArrowRight':
            input.setSelectionRange(cursorPosition + 1, cursorPosition + 1)
        break
        case 'ArrowLeft':
            input.setSelectionRange(cursorPosition - 1, cursorPosition - 1)
        break
    }
}
