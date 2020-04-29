const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {  //no caso caso não informe um 3 parametro operação será como padrão a função soma
    console.log(operacao(a, b))   // aqui chama operação que será o soma caso não informe ele como 3 parametro. 
}

imprimirResultado(3, 4)   // 1 e 2 paremtro informado então operação sera o soma
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {    // passado o 3 parametro como função
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)  // no 3 usou-se uma arrow funtion

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()    // chama a função que esta dentro do atributo falar do objeto pessoa