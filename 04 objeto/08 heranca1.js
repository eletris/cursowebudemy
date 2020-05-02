const ferrari = {   //testando o git
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)  // objeto ferrari nãon tem o atributo prototype
console.log(ferrari.__proto__)    // __proto ira procurar em todos os prototipos ou pais
console.log(ferrari.__proto__ === Object.prototype)  // é verdadeiro onde proto é igual esta dentro de object
console.log(volvo.__proto__ === Object.prototype) // 
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)  //Object.prototype é um objeto vazio    e MeuObjeto.prototype é uma função