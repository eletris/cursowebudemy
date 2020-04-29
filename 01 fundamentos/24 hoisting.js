console.log('a =', a)   //a não foi declarada aqui só imprimi que não foi definida undefined.
var a = 2               // declarada agora
console.log('a =', a)      // hoist é o icamento no caso jogou var a para cima

console.log('b =', b)
let b = 2                      // icamento com let não é possivel ai vai dar erro.
console.log('b =', b)