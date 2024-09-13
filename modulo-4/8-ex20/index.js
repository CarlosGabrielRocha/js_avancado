import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"
import { TextElement } from "./TextElement.js"


const div = new Component('div', 'div1', 'div1')
const h1 = new TextElement('h1', 'Formulário', 'h1form')
const inputText = new Input('text', 'inputText1', 'inputText1', 'inputText', 'nome')
const label = new Label('Seu Nome', 'inputText1')
const button = new Input('button', 'button1', 'button1', 'buttonInput', 'Enviar')

const form = new Form()

h1.getInto(div)
form.render()
form.putIn(div, inputText, label, button)







