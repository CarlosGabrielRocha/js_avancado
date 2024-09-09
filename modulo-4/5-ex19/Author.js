const Post = require('./Post')

class Author {
    constructor (name) {
        this.name = name
        this.posts = [

        ]
    }

    newPost(topic) {
       const newPost = new Post(this.name, topic)
       this.posts.push(newPost)
       return newPost
    }
}

const carlos = new Author('Carlos Gabriel')
const iaInfo = carlos.newPost('A inteligência artifical vai dominar o mercado?')
carlos.newPost('As abelhas serão instintas?')
iaInfo.addComment('Concordo com tudo, rapaz')
iaInfo.addComment('Não concordo, quantos serão afetados?')

console.log(iaInfo)
console.log(carlos)