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
