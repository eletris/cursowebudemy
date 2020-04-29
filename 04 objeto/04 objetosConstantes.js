// pessoa -> 123 -> {...}    pessoa que aposta para um endereço na memoria(123) que guarda o conteudo do objeto{}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }   // vai dar erro pq vc esta querendo que pessoa aponte para outro endereço de memoria devido a ser uma const.

Object.freeze(pessoa)  // voce congela o objeto e não consegue fazer alteração 

pessoa.nome = 'Maria'   // então naõ vai funcionar pois esta em freeza
pessoa.end = 'Rua ABC'   //
delete pessoa.nome      // 

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })  // aqui já atribui e congela o objeto
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)