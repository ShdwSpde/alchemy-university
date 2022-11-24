function isEnough(cost, money) {
   return cost === money || money > cost ? true:false
    
}

function greater(first, last) {
    if(first > last){
        return first
    } else if ( last > first){
        return last
    }
}


function isNotEqual(a, b) {
    return a !== b ? true: false
}

function getFloor(x) {
        return Math.floor(x)
}

function canAccess(purchasedSubscription, freeTrial) {
    return purchasedSubscription == true || freeTrial == true ? true: false
}

function summation(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum;
}

function factorial(n) { 
    let factorial = 1
 for(let i = n; i > 0; i--){
     factorial *= i
 }
    return factorial
}

function scream(n) {
    let scream = ''
    for(let i =0;i < n; i++){
        scream += 'a'
    }
    return scream
}

function screamm(n) {
    let screamm = ''
    for(let i =0;i < n; i++){
        if(i % 2 === 0){
            screamm += 'a'
        } else if(i % 2 === 1){
        screamm += 'A'
        }
    }
    return screamm
}

function topDouble(value, top) {
    while(top > value){
        value *= 2
    }
    return value / 2
}

function checkNumber(num) {
    if(num === 0){
        return('zero')
    }else if (num > 0){
        return('positive')
    }else{
        return('negative')
    }
}

function maxSum(num) {
    let maxSum = 0
    for(let i = 1;i <= num;i++){
        maxSum += i
    }
    return maxSum
}

function startsWithX(string) {
    string = string.toLowerCase()
    return string.charAt(0) === 'x' ? true : false;
}
