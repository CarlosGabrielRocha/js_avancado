const Character = require("./Character")
const Mage = require("./Mage")
const Thief = require("./Thief")
const Warrior = require("./Warrior")

function space() {
 console.log('- - - - - - - - - - - - - - - - - - - - - - - - -')
}

const gabriel = new Warrior('Gabriel', 'defense')

const enemy = new Thief('Bot1')

const friend = new Mage('Bot2')

enemy.attack(gabriel)
gabriel.changePosition()
friend.healSelf()
friend.heal(gabriel)






