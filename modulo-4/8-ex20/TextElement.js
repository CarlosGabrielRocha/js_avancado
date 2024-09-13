import { Component } from "./Component.js";

export class TextElement extends Component {
    constructor(element, text, id, className) {
        super(element, id, className)
        this.#innerText(text)
    }

    #innerText(text) {
        super.element().innerText = text
    }
}