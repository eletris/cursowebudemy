const sequencia = {    // get faz leitura e set faz a alteração
    _valor: 1, // convenção de colocar _ que vai ser acessada internamente do obj sequncia
    get valor() { return this._valor++ },  // nesse caso sempre que for chamado valor() ele irá incrementar +1 em _valor 
    set valor(valor) {                   // aqui será definido um parametro em valor() ou seja o que valor irá receber
        if(valor > this._valor) {           // valida se o parametro valor é maior que _valor que tem como padrão 1. 
            this._valor = valor            // se sim _valor irá receber o que esta no parametro valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // 
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)