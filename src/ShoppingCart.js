class ShoppingCart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(itemName,quantity,price) {
    const addNewItems = Object.assign({name: itemName,quantity: quantity, pricePerUnit: price})
    return this.items.push(addNewItems) 
  }

  clear() {
    return this.items = []
  }

  clone(obj) {
  let newObj = JSON.parse(JSON.stringify(obj));
  return newObj
  }
  
}

module.exports = ShoppingCart;

// Below data you can use for testing

// const cart = new ShoppingCart()
// cart.addItem('bike', 1, '200')

// const cart2 = cart.clone(cart)
// console.log(cart2)

// console.log('.....')

// cart.addItem('bike', 2, '600')
// cart.addItem('beer', 5, '25')
// console.log(cart)


    