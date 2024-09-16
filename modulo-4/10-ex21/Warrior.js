const Character = require("./Character");

class Warrior extends Character {
    constructor(name, position = 'attack', shieldPoints = 20, life = 300, attackPower, defense) {
        super(name, life, attackPower, defense)
        this.shieldPoints = shieldPoints
        this.position = position
        this.#verifyStartingPosition()
    }

    attack(target) {
        if (this.position === 'attack') {
            const lostLife = this.attackPower - target.defense
            target.life -= lostLife
            this.attackMoveAlert(this.name, target, lostLife)
        }
    }

    changePosition() {
        if (this.position === 'attack') {
            this.position = 'defense'
            this.defense = this.defense + this.shieldPoints
            this.#changePositionMove()
        } else if (this.position === 'defense') {
            this.position = 'attack'
            this.defense = this.defense - this.shieldPoints
            this.#changePositionMove()
        }
    }

    #verifyStartingPosition() {
        if (this.position === 'defense') {
            this.defense = this.defense + this.shieldPoints
        }
    }

    #changePositionMove() {
        console.log(`${this.name} mudou a posição, posição atual: ${this.position}`)
    }
}

module.exports = Warrior