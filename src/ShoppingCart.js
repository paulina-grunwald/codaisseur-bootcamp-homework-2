module.exports = function ShoppingCart(...args) {
  this.items = []
  this.getItems = () =>  this.items
  this.addItem =  (itemName,quantity,price) => {
      const addNewItems = Object.assign({name: itemName,quantity: quantity, pricePerUnit: price})
      this.items.push(addNewItems)
      return 
  }
  this.clear = () =>  this.items = []
  
  
}
  
  

    