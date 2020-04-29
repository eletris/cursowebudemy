function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`   // retorna o valor de moeda que é só o simbolo concatenando com os valores preço informado na const produto * por 1 menos desconto * 1 + imposto que se não infomado é 0. 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco    // cria-se o atributo get preço que esta associado a função declarada acima.
}

global.preco = 20
global.desc = 0.1    // somente define valores dentro das variavel colocadas como globais dentro da função getPreço
console.log(getPreco())     // nesse caso ele só vai pegar os valores que estão na função getpreço ou seja ele não consegue pegar os valores na cosnt produto.
console.log(produto.getPreco())  // aqui sim é chamado o getpreço que esta dentro da const produto 

const carro = { preco: 49990, desc: 0.20 }  

console.log(getPreco.call(carro))   // com a call vc consegue chamar a função get preço informando a cont carro que informara seus atributos.
console.log(getPreco.apply(carro))    //irá tbm passar o objeto carro para o contexto da função getPreço

console.log(getPreco.call(carro, 0.17, '$'))   //em call se especifica contexto junto com as atrbuições
console.log(getPreco.apply(global, [0.17, '$']))   // em apply informace o contexto e dentro de um array as atribuições. 