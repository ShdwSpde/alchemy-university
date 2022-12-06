function toNumber(string) {
    return Number(string) || 0
}

function combineToString(a, b) {
    return a.toString() + b.toString()
}


function isTruthy(a) {
    if(a){
        return 'a is truthy!'
    }
}


function looseEquals(a, b) {
    return a == b? true: false;
}

function toJSON(obj) {
    return JSON.stringify(obj)
}

const personJSON = `
    {
       "name" : "Mike",
       "isReal" : true,
       "age" : 33 
    } 
`;

function eitherNotBoth(num) {
if((num % 3 === 0) && (num % 5 === 0)){
    return false
}else if ((num % 3 === 0) || (num % 5 === 0)){
    return true
}else{
    return false
}
}

function fizzBuzz(numbers) {
let result = ''
for(let i = 0; i < numbers.length;i++){
    if((numbers[i] % 5 === 0) && (numbers[i] % 3 === 0)){
        result += 'fizzbuzz'
    } else if(numbers[i] % 5 === 0){
        result +='buzz'
    } else if(numbers[i] % 3 === 0){
        result += 'fizz'
    }
}
return result
}
