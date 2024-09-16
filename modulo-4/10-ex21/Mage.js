const Character = require("./Character");

class Mage extends Character {
    constructor(name, magicPoints = 20, life = 120, attackPower = 300, defense = 30) {
        super(name, life, attackPower, defense)
        this.magicPoints = magicPoints
    }

    attack(target) {
        const lostLife = this.attackPower + this.magicPoints - target.defense
        target.life -= lostLife
        this.attackMoveAlert(this.name, target, lostLife)
    }

    heal(target) {
        const addedLife = this.magicPoints * 2
        target.life += addedLife
        this.#healingMove(this.name, target, addedLife)
    }

    healSelf() {
        const addedLife = this.magicPoints * 2
        this.life += addedLife
        this.#healingSelfMove(addedLife)
    }

    #healingMove(player, target, addedLife) {
        console.log(`${player} curou ${addedLife} pontos de vida em ${target.name}
            status de ${target.name}: ${target.life}`)
    }

    #healingSelfMove(addedLife) {
        console.log(`${this.name} curou ${addedLife} pontos de vida
            status de ${this.name}: ${this.life}`)
    }
}

module.exports = Mage