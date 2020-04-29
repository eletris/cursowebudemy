function soma() {
    let soma = 0
    for (i in arguments) {    // i é um indice do array arguments
        soma += arguments[i]   // soma vai receber o valor que é 0 + o que for passado no arguments dentro do indice informado por i
    }
    return soma
}

console.log(soma())    // não entra no for pega valor 0
console.log(soma(1))   // soma 0 com 1 do indice 
console.log(soma(1.1, 2.2, 3.3))  // soma o que foi informado pq cada valor informado é armazenado em um indice do array arguments

console.log(soma(1.1, 2.2, "Teste"))   // soma os 2 primeiros e comcatena com teste
console.log(soma('a', 'b', 'c'))    // pega o valor 0 e concatena com as letras

//arguments é um array que armazena os valores que são informados em qualquer função que naõ foi definido parametros