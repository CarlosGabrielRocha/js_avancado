class Character {
    constructor(name, life = 200, attackPower = 80, defense = 40) {
        this.name = name
        this.life = life
        this.attackPower = attackPower
        this.defense = defense
    }

    attack(target) {
       const lostLife = this.attackPower - target.defense
       target.life -= lostLife
       this.attackMoveAlert(this.name, target, lostLife)
    }

    attackMoveAlert(player, target, lostLife) {
        console.log(`${player} infligiu ${lostLife} de dano em ${target.name}
            status de ${target.name}: ${target.life}`)
    }
}

module.exports = Character