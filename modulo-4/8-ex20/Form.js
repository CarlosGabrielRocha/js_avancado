import { Component } from "./Component.js";

export class Form extends Component {
    constructor(id, className) {
        super('form', id, className)
    }

    putIn(...elements) {
        elements.forEach(element => {
            super.element().append(element.element())
        })
    }
}