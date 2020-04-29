// Funcao sem retorno
function imprimirSoma(a, b) {    
    console.log(a + b)
}

imprimirSoma(2, 3)    //chama a função e infoorma os valores para a e b
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {       //definiu o b como padrão 1
    return a + b               //aqui já define o resultado dentro da função
}

console.log(soma(2, 3))             /// então para mostra tem que mandar imprimir o conteudo, chamar a função e passar os parametros.
console.log(soma(2))
console.log(soma())            // aqui vai ficar como NaN porem da para corrigir caso coloque o a = 0 ou outro numero