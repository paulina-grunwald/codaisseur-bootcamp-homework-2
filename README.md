# Homework Assignment

This assignment covers the first week of the Intermediate Bootcamp. This repository contains 3 test files, each covering a single task. The order of the tasks does not matter. You can complete them in any order. Try to complete as many of them as you can.

First run `yarn install` to install the dependencies.
Run the tests with the command `yarn test`. Read the instructions in this document to know what is expected of you. The tests are meant to help you know when you've completed a task. You can and should read the tests to see exactly what it's expecting, especially if you're getting errors. However, do **not** change the tests.

_Note: we'll use the results of this homework assignment for a formal evaluation and as such you should write the code individually. **Plagiarism is a violation of the Academy contract and makes nobody happy. Do not discuss this assignment in slack**_

**Note:** You _can_ implement some of them out of order!

## How to submit your results

**Send your homework to teachers@codaisseur.com before Sunday 20:00**

Clean up your code:

- Fix the formatting/indentation
- Remove unnecessary code.

The app should be runnable simply by cloning the repository and running `yarn test`

## Instructions

### Assignment 1: ShoppingCart

1.  You must create a module named `ShoppingCart`. The test imports it with
    ```js
    const ShoppingCart = require("./ShoppingCart")
    ```
1.  The module must export a `class`, so we can run `const cart = new ShoppingCart()`
1.  Right after constructing a new object, calling `cart.getItems()` should return an empty array.
1.  We should be able to call `cart.addItem(itemName, quantity, price)`, which adds a new item to an internal array. Subsequent calls to `cart.getItems()` should return the added items. Items in the array should be in this format:
    ```js
    {
      name: "Name of the item",
      quantity: 1,
      pricePerUnit: 99.99
    }
    ```
1.  Calling `cart.clear()` should remove all items from the items array.
1.  Calling `cart.clone()` should return a _new_ ShoppingCart object that contains all the same items. However, the items array and all the items inside should be **copied** so that any changes to one of the carts does not affect the other.

### Assignment 2: path finder

1.  You must create a module named `pathFind`. The test imports it with
    ```js
    const { pathFind } = require("./pathFind")
    ```
    _Note: This is a named export_
1.  The exported `pathFind` should be a function. Declare this function with the `function` keyword (otherwise the tests cannot check if your function is recursive later)
1.  The function will be called with two parameters: `pathFind(path, object)`. The path is an array of strings and the object is an object. The array of strings refer to a sequence of properties on the object. Here are some examples of how it should work:
    ```js
    pathFind(["foo"], { foo: "bar" }) // === "bar"
    pathFind(["name"], { name: "Dave" }) // === "Dave"
    pathFind(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
    pathFind(["book", "author", "name"], {
      book: {
        author: {
          name: "Yuval"
        }
      }
    }) // === "Yuval"
    ```
1.  The function should be a pure function, neither of the inputs should be mutated.
1.  The function should be recursive. If you don't manage making it recursive, it's more important that it returns the expected outputs.

### Assignment 3: Asynchronous code

1. You must create a module named `async-functions`. The test imports it with
    ```js
    const {
      giveItBackLater,
      addSomePromises,
      promiseToGiveItBackLater
    } = require("./async-functions")
    ```
    _Note: There should be **3** named exports that should all be functions_
1. The function `giveItBackLater` will be called with two parameters:
   ```js
   giveItBackLater(value, callback)
   ```
   The `callback` function should be called and given the `value` as a parameter. It should NOT do this right away, but later (asynchronously) using `setTimeout`.
1. The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with the `value` later. It should use the same function you defined in `giveItBackLater`. That means you will wrap your callback-style function with a promise-style version.
1. When the code `const outputPromise = addSomePromises(somePromise)` is executed, your function should return a new promise that has both a fulfillment handler and a rejection handler.

     - When `somePromise` resolves with a string `"foo"`, the `outputPromise` should resolve with a string `"foofoo"`.
     - When `somePromise` is rejected with the value `"bar"`, the `outputPromise`  should resolve with `"barbarbar"`.

   So, your fulfillment handler should double the string and the rejection handler should triple the string.
