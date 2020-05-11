console.log(this === global)  // false pois aposta para module.exports
console.log(this === module)   // false

console.log(this === module.exports)  // sim
console.log(this === exports)   // sim aposta para o mesmo object

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)  //this dentro de uma função não aposta para exports
    console.log(this === module.exports)  // false tbm
    console.log(this === global)  // this aposta para global dentro da função
}

logThis()