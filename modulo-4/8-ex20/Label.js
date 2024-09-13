import { Component } from "./Component.js";

export class Label extends Component {
    constructor(text = '', htmlFor = '', id, className) {
        super('label', id, className)
        this.#buildLabel(super.element(), text, htmlFor)
    }

    #buildLabel(element, text, htmlFor) {
        element.innerText = text
        element.htmlFor = htmlFor
    }
}