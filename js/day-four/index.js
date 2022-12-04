function halfValue(numbers) {
const result = numbers.map(x => Math.ceil(x * 1/2))
return result
}


function countC(str) {
    str = str.toLowerCase()
    let result = 0
    for(let i = 0;i< str.length;i++){
        if(str.charAt(i)=== 'c'){
            result += 1
        }
    }
    return result
}


function countVowels(string) {
string = string.toLowerCase()
let vowelCount = 0
for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelCount += 1;
    }
  }
  return vowelCount
}


function reverse(string) {
    return string.split('').reverse().join('')
}


function isPalindrome(string) {
return string.split('').reverse().join('') === string ? true:false;
}


function sumTogether(arr1, arr2) {
for(let i = 0; i < arr1.length;i++){
    arr1[i] = (arr1[i] + arr2[i])
}
return arr1
}


function countElements(elements) {
let frequencyCounter = {}
for(let element of elements){
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1
}
return frequencyCounter
}
