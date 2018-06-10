const giveItBackLater = (value, callback) => {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 200)
}

const addSomePromises = (somePromise) => {
    let done = true
    const promise = new Promise((resolve,reject) => {
        if (done) {
            return resolve(somePromise*2)
        } else {
            return reject(somePromise*3)
        }
    })
    return promise

}
  
const promiseToGiveItBackLater = (value) => {
    return new Promise((resolve,reject) => {
        function loadComplete() {
            resolve(value)
        }
        setTimeout(loadComplete,700)
    })
}
   
module.exports = {giveItBackLater,addSomePromises,promiseToGiveItBackLater }