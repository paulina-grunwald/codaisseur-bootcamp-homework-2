const assert = require("assert")

describe("Assignment 3 - async", function() {
  it("JS file should exist, and should have named exports", function() {
    const {
      giveItBackLater,
      addSomePromises,
      promiseToGiveItBackLater
    } = require("./async-functions")
    assert.strictEqual(
      typeof giveItBackLater,
      "function",
      "async-functions should export a function called giveItBackLater"
    )
    assert.strictEqual(
      typeof addSomePromises,
      "function",
      "async-functions should export a function called addSomePromises"
    )
    assert.strictEqual(
      typeof promiseToGiveItBackLater,
      "function",
      "async-functions should export a function called promiseToGiveItBackLater"
    )
  })

  it("giveItBackLater should use callback, but not straight away", function(done) {
    let callbackCalled = false
    const { giveItBackLater } = require("./async-functions")
    giveItBackLater("TotallyAwesomeValue", value => {
      callbackCalled = true
      assert.strictEqual(
        value,
        "TotallyAwesomeValue",
        "Callback should receive the value passed to `giveItBackLater`"
      )
      done()
    })
    assert(!callbackCalled, "Callback should not be called straight away")
  })

  it("promiseToGiveItBackLater should return the given value", function(done) {
    const { promiseToGiveItBackLater } = require("./async-functions")
    promiseToGiveItBackLater("AnotherThing").then(value => {
      assert.strictEqual(
        value,
        "AnotherThing",
        "promise should resolve to the provided value"
      )
      done()
    })
  })

  it("addSomePromises should chain promises and return a new promise", function(done) {
    const { addSomePromises } = require("./async-functions")
    const rejectedPromise = Promise.reject("failure")
    const p1 = addSomePromises(Promise.resolve("success")),
      p2 = addSomePromises(rejectedPromise)
    // catch rejection to avoid warning
    rejectedPromise.catch(() => null)

    assert(p1 instanceof Promise, "addSomePromises should return a new promise")
    assert(p2 instanceof Promise, "addSomePromises should return a new promise")

    Promise.all([p1, p2]).then(([val1, val2]) => {
      try {
        assert.strictEqual(
          val1,
          "successsuccess",
          "when the input promise resolves, the output promise should resolve with a doubled up string"
        )
        assert.strictEqual(
          val2,
          "failurefailurefailure",
          "when the input promise rejects, the output promise should resolve with a tripled up string"
        )
        done()
      } catch (err) {
        done(err)
      }
    })
  })
})
