// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))    // pega só os valores do obk
console.log(Object.entries(obj))    // pega as chaves e valores criando uma matriz 

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {   //criação de função dentro do objeto
       return 'Oi gente!' 
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {   //usa herança com extends
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar()) 