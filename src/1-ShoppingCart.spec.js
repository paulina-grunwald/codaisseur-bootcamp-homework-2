const assert = require("assert")

describe("Assignment 1 - ShoppingCart", function() {

  it("JS file should exist, and exported value should be a constructor", function() {
    const ShoppingCart = require("../src/ShoppingCart")
    new ShoppingCart()
  })

  it("should be able to add items", function() {
    const ShoppingCart = require("../src/ShoppingCart")
    const cart = new ShoppingCart()
    assert.deepStrictEqual(
      cart.getItems(),
      [],
      "Items should be an empty array, initially"
    )
    cart.addItem("Trash can", 1, 15.5)
    assert.deepStrictEqual(
      cart.items,
      [
        {
          name: "Trash can",
          quantity: 1,
          pricePerUnit: 15.5
        }
      ],
      "The added item must be in the items array"
    )
  })

  it("should be able to clear items", function() {
    const ShoppingCart = require("../src/ShoppingCart")
    const cart = new ShoppingCart()
    cart.addItem("Trash can", 1, 15.5)
    cart.clear()
    assert.deepStrictEqual(
      cart.getItems(),
      [],
      "Items should be an empty after clear()"
    )
  })

  it("cloned should be a separate copy", function() {
    const ShoppingCart = require("../src/ShoppingCart")
    const cart1 = new ShoppingCart()
    cart1.addItem("Rolex watch", 2, 250.1)
    const cart2 = cart1.clone()
    assert.deepStrictEqual(
      cart1.getItems(),
      cart2.getItems(),
      "Items array should be equal after cloning"
    )
    cart2.addItem("Shoes", 1, 90.0)
    assert.notDeepStrictEqual(
      cart1.getItems(),
      cart2.getItems(),
      "Items array should NOT be equal after adding more items to second cart"
    )
    assert.deepStrictEqual(
      cart1.getItems(),
      [
        {
          name: "Rolex watch",
          quantity: 2,
          pricePerUnit: 250.1
        }
      ],
      "cart 1 should contain expected data"
    )
    assert.deepStrictEqual(
      cart2.getItems(),
      [
        {
          name: "Rolex watch",
          quantity: 2,
          pricePerUnit: 250.1
        },
        {
          name: "Shoes",
          quantity: 1,
          pricePerUnit: 90.0
        }
      ],
      "cart 2 should contain expected data"
    )
    // increment quantity of first item in cart2
    cart2.getItems()[0].quantity++
    assert.strictEqual(cart2.getItems()[0].quantity, 3, "quantity should be changeable")
    assert.strictEqual(cart1.getItems()[0].quantity, 2, "cart items should be copied, quantities should change independently")
  })
})
