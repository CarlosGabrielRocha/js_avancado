export function createElement(tag = 'div', id = '', ...classes) {
    const element = document.createElement(tag)
    if (id) element.id = id
    element.classList.add(...classes)
    return element
}

export function textElement(tag = 'p', text = '', id, ...classes) {
    const element = createElement(tag, id, ...classes)
    element.innerText = text
    return element
}

export function midiaElement(tag = 'img', src = '', alt = '', id, ...classes) {
    const element = createElement(tag, id, ...classes)
    element.src = src
    element.alt = alt
    return element
}

export function label(forElement, text) {
    const element = createElement('label')
    element.for = forElement
    element.innerText = text
    return element
}

export function input(type = 'text', value, atts = '', id, ...classes) { // atts = [{name, value}]
    const element = createElement('input', id, ...classes)
    element.type = type
    element.value = value
    if (atts) {
        atts.forEach( ({name, value}) => {
            element.setAttribute(name, value)    
        })
    }

    return element
}