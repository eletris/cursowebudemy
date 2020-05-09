const ferrari = {   //testando o git
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)  // objeto ferrari nãon tem o atributo prototype
console.log(ferrari.__proto__)    // __proto__ é um atributo que geralmente esta no objeto pai de ferrari nessa caso não esta há então aponta para o Object.prototype
console.log(ferrari.__proto__ === Object.prototype)  // é verdadeiro onde proto é igual esta dentro de object
console.log(volvo.__proto__ === Object.prototype) // tbm aposta para Object.prototype
console.log(Object.prototype.__proto__ === null) // Object.prototype é o final ou seja não tem __proto__

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)  //Object.prototype é um objeto vazio    e MeuObjeto.prototype é uma função