const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Sabiá das Laranjeiras", 198, "Santa Maria", "Igarassu", "PE")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.address.fullAddress())