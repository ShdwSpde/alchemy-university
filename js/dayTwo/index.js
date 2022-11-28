function endsWithX(string) {
    string = string.toLowerCase()
  return string.charAt((string.length - 1)) === 'x' ? true : false;
}

function isAllX(string) {
let check = ''
string = string.toLowerCase()

for(let i = 0; i < string.length;i++){
    if(string.charAt(i) === 'x'){
        check += 'x' 
    }
}
return check === string ? true : false;
}

function findFirstX(string) {
return string.indexOf('x')    
}

function splitAtX(string) {
     const a = string.slice(0,(string.indexOf('x')))
     const b = string.slice((string.indexOf('x') + 1),(string.length))
     return a.length > b.length ? a : b;
}
