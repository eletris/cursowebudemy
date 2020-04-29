console.log(typeof Object)    //informa que objeto é uma função
console.log(typeof new Object)   //no caso cria um objeto 

const Cliente = function() {}     // dentro ca constante cliente cria uma função vazia
console.log(typeof Cliente)   // cliente será considerado uma função
console.log(typeof new Cliente)     //vira objeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)         // a classe produto é função
console.log(typeof new Produto())   // pode colocar com parenteses ou sem