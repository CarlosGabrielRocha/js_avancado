export class Component {
    #element
    constructor (element = 'div', id = '', className = '') {
        this.#element = this.build(element, id, className)
    }

    build(element, id, className) {
        const div = document.createElement(element)
        div.id = id
        div.className = className
        return div
    }

    element() {
        return this.#element
    }

    render() {
        document.querySelector('body').appendChild(this.element())
    }

    getInto(father) {
        father.element().appendChild(this.#element)
    }
}

