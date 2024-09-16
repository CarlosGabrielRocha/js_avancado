const Character = require("./Character")


class Thief extends Character {
    constructor(name, life = 250, attackPower, defense = 60) {
        super(name, life, attackPower, defense)
    }
    attack(target) {
        const lostLife = (this.attackPower - target.defense) * 2
        target.life -= lostLife
        this.attackMoveAlert(this.name, target, lostLife)
    }
} 

module.exports = Thief