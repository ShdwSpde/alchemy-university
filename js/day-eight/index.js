function runCallback(callbackFunction) {
 setTimeout(function runCallback() {
     callbackFunction()
 }, 1000)
}


class Dialog {
  constructor(){
    this.callbacks = []
  }
    onClose(callbackFunction) {
      this.callbacks.push(callbackFunction)
    }

    close() {
      let i = -1
      while(++i < 
      this.callbacks.length)
      this.callbacks[i]()
    }
}


function forEach(arr, callback) {
 arr.forEach(callback)
}


function map(arr, callback) {
    const result = arr.map(x =>
    callback(x)
    )
    return result
}
