class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(porcent) {
      const descont = (this.price * porcent) / 100
      return this.price - descont
    }
}

const ketchup = new Product("Ketchup", "", 80)

console.log(ketchup)

ketchup.addToStock(20)

console.log(ketchup)

console.log(ketchup.calculateDiscount(10))