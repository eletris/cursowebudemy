const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))   //pega todas as chaves
console.log(Object.values(pessoa))   // pega somente os valores
console.log(Object.entries(pessoa))  // pega chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => {  // pega primeiro todos as chaves e valores depois com o forEach organizar nos parametros chave e valor.
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {   // definir a chave dataNasciment que esta no obj pessoa 
    enumerable: true,    // vai ser listado caso vc de um keys 
    writable: false,    //pode ser alterada 
    value: '01/01/2019'   // define o valor padrão da chave
})

pessoa.dataNascimento = '01/01/2017'    // como o writable esta como false não vai funcionar a alteração
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))   // como enumerable esta true ele aparece na listagem caso false não aparece

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)  // assign concatena objetos

Object.freeze(obj)
obj.c = 1234
console.log(obj)