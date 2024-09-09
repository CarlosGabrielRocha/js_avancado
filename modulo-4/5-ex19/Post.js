const Comment = require('./Comment')

class Post {
    constructor (author, topic) {
        this.author = author
        this.topic = topic
        this.comments = [
            
        ]
    }

    addComment(text) {
        const newComment = new Comment(text)
        this.comments.push(newComment)
    }
}

module.exports = Post