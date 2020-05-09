function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)   //os 2 objetos criado tem o __proto aposntando para o mesmo objeto pai
console.log(MeuObjeto.prototype === obj1.__proto__)  //no caso o obj1 criado aponta para o MeuObjeto.prototype  

MeuObjeto.prototype.nome = 'Anônimo'  //no caso colocado um atributo nome que estara tbm disponivel para os obj1 e 2 que foram criados com new
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()  //no caso o obj1 vai pegar o valor anonimo que vem do pai MeuObjeto

obj2.nome = 'Rafael'  //aqui da o shadowing no nome do pai
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype   //atribuição manual do obj para tbm ser do MeuObjeto
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)