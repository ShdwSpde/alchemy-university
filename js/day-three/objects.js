const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];

 function numberOfPizzas(orders) {
    let totalPizzas = 0
    for (let i = 0; i < orders.length;i++){
        totalPizzas += orders[i].pizzas
    }
    return totalPizzas
}
function numberOfKeys(object) {
    total = 0
    for(let key in object){
       return (Object.values(object)).length
    }
}

// remove key from object
function removeSecret(object) {
    delete object.secret
}

function shortestString(str1, str2) {
return str1.length > str2.length ? str2 : str1; 
}
