import { Component } from "./Component.js";

export class Input extends Component {
    
    constructor(type, id, className, name = '', value = '', placeholder = '') {
        super('input', id, className)
        this.#buildInput(super.element(), type, name, value, placeholder)
    }

    #buildInput(element, type, name, value, placeholder) {
        element.type = type
        element.name = name
        element.value = value
        element.placeholder = placeholder
    }

}


