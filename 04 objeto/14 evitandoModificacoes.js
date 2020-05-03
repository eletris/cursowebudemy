// Object.preventExtensions não permite atribuir mais atrbutos no obj
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))  //informa se o objeto foi criado com o preventextensions e se é extensivel (pode se colocar mais atributos)

produto.nome = 'Borracha'   // altera
produto.descricao = 'Borracha escolar branca'  //tenta criar novo atributo mas não será permitido
delete produto.tag   // exclusão é permitida
console.log(produto)

// Object.seal de selar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)  // bloqueio inserção de atributos ou remoção
console.log('Selado:', Object.isSealed(pessoa))   //é selado sim

pessoa.sobrenome = 'Silva'   //não inclui
delete pessoa.nome    //não deleta
pessoa.idade = 29    // idade muda normal
console.log(pessoa)

// Object.freeze = selado + valores constantes