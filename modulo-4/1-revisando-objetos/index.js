
// PascalCase
function Book (title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) { // Não é obrigatório a função ter um nome.
        this.inStock += quantity
    }
    this.save = function () {
        // Salva no banco de dados
    }
}

const author = { name: 'Christopher Paolini' }
const tags = ["fantasy", "adventure"]

const eragon = new Book("Eragon", 320, tags, author)

console.log(eragon)

const eldest = new Book("Eldest", 630, tags, author)

console.log(eldest)

function Color (name, id) {
    this.name = name
    this.id = id
}

const blue = new Color('azul', 50)
const red = new Color('vermelho', 12)
console.log(blue)
console.log(red)