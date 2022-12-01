function hasOne(array) {
  return array.indexOf(1) === -1 ? false : true;

}


function sumEven(array) {
    let total = 0
    for(let i= 0; i < array.length;i++){
        if(array[i] % 2 === 0){
            total += array[i]
        }
    }
    return total
}


function unique(array) {
    let test = []
    for(let i = 0; i < array.length;i++){
        if(test.indexOf(array[i]) === -1){
            test.push(array[i])
        }
    }
    return test
}


function addOne(array) {
for(let i = 0; i < array.length;i++){
    array[i] += 1
}
console.log(array)
}


function removeOccurrences(array, num) {
 for(let i = array.length - 1;i >= 0;i--){
     if(array[i] == num){
         array.splice(i,1)
     }


