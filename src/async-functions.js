
module.exports = 'async-functions'

const giveItBackLater = (value, callback) => {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 10)
}


const addSomePromises = (somePromise) => {
    return new Promise((resolve,reject) => {
        if (somePromise=="foo") {
            return resolve(somePromise*2)
        } else if (somePromise==="bar") {
            return reject(somePromise*3)
        }
      })
  }

const promiseToGiveItBackLater = (value) => {
}

      
module.exports = {giveItBackLater,addSomePromises,promiseToGiveItBackLater }