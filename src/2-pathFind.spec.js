const assert = require("assert")

describe("Assignment 2 - pathFind", function() {
  it("JS file should exist, named export should be a function", function() {
    const { pathFind } = require("./pathFind")
    assert.strictEqual(
      typeof pathFind,
      "function",
      "the NAMED export `pathFind` should be a function"
    )
  })

  it("should return the property from an object", function() {
    const { pathFind } = require("./pathFind")
    const obj = {
      foo: "Hey"
    }
    assert.strictEqual(
      pathFind(["foo"], obj),
      "Hey",
      "should return the foo property"
    )
  })

  it("should return the property of a nested object", function() {
    const obj = {
        foo1: {
            foo2: {
                bar: "Some value"
            }
        }
      }
      const { pathFind } = require("./pathFind")
      assert.strictEqual(
        pathFind(["foo1", "foo2", "bar"], obj),
        "Some value",
        "should return the foo1.foo2.bar property"
      )
    })

    it("should be a pure function", function() {
        const { pathFind } = require("./pathFind")
        const path = ["foo1", "foo2", "bar"]
        const obj = {
            foo1: {
                foo2: {
                    bar: "Some value"
                }
            }
          }
          pathFind(path, obj)
          assert.deepStrictEqual(
            path,
            ["foo1", "foo2", "bar"],
            "path should not be modified"
          )
          assert.deepStrictEqual(
            obj,
            {
                foo1: {
                    foo2: {
                        bar: "Some value"
                    }
                }
              },
            "search object should not be modified"
          )
        })

        it("uses recursion", function() {
            const { pathFind } = require("./pathFind")
            const esprima = require('esprima')
            const ast = esprima.parseScript(pathFind.toString())
            const functionName = ast.body[0].id.name
            assert(findCallee(functionName, ast), `the function ${functionName} must call ${functionName}`)
            // throw ast.body[0].id.name
            // assert.equal(, "the function pathFind must call pathFind")
        })
    })

function findCallee(name, ast) {
    if (ast && ast.callee && ast.callee.name === name) {
        return true
    }
    if (ast instanceof Array) {
        if (ast.find(obj => findCallee(name, obj))) {
            return true
        }
    }
    if (ast instanceof Object) {
        if (Object.values(ast).find(obj => findCallee(name, obj))) {
            return true
        }
    }
    return false
}