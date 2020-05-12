// Arrow Function
const soma = (a, b) => a + b   // arrow é anonima ou seja sempre é atribuido um nome na const (parametros) => retorno implicito se não tem corpo
console.log(soma(2, 3))  //evocação de uma arrow

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) //função arrow sem parametros definidos => que retorna se o this é === exports nesse caso a função esta diretamento no modulo ou seja no arquivo
const lexico2 = lexico1.bind({})  // aqui tenta colocar o lexico1 apontando para um obj vazio. 
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {  //definido valo padrão no parametro
    console.log(texto)
}

log()  //pega o valor padrão
log('Sou mais forte')  //altera o valor padrão

// operador rest
function total(...numeros) {   //função total recebe um conjunto de numeros
    let total = 0
    numeros.forEach(n => total += n)  // dentro de numeros vai dar um for each que varra cada elemento informado onde atribui dentro de n o valor total += o valor de n
    return total
}
console.log(total(2, 3, 4, 5))   //ou seja soma de todos