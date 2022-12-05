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


function playerHandScore(hand) {
let score = 0
for (let card of hand){
    if(card === 'K'){
        score += 4
    }
    if(card === 'Q'){
        score += 3
    }
    if(card === 'J'){
        score += 2
    }
}
return score
}


function willEat(hasPizza, hasDonuts, hasCookies) {
   return (hasPizza || hasDonuts || hasCookies) ? true:false;
}

function double(x) {
    return x * 2 || 0;
}


function canBreathe(isConnected, hasOxygen, aboveWater) {
    return aboveWater || (isConnected && hasOxygen) ? true : false;
}


//Guard Operator
function friendName(friend) {
    return friend && friend.name;
}


function carCrossing(aCrossing, bCrossing) {
   if(aCrossing && !bCrossing){return true}
   if(aCrossing && bCrossing){return false}
   if(bCrossing && !aCrossing){return true}
   if(!bCrossing && !aCrossing){return false}
}

function throwError() {
    const a = true
    if(a === true){
        throw new Error('dang, we aint do this right')
    }
}

function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        console.log(ex)
    }
}



function catchError(fn) {
    try {
        fn();
    }
    catch(err) {
        return err
    }
    return false
}

