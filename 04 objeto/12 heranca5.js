console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {   // cria dentro de prototy de string com uma função de reverse.
    return this.split('').reverse().join('')   // split que quebra a string tranformando em um array separando com espaço depois da um reverse que reverte a ordem depois com join junta novamente
}

console.log('Escola Cod3r'.reverse())    //pega a string e chama a função reverse que mostrar a frase reversa

Array.prototype.first = function() {    // coloca dentro de array prototype a função first que somente mostra o conteudo do primeiro indice 0
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())   // informa o array e chama a função first que informa o primeiro elemento
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {   // aqui sobrescreve uma função que já tem na função String que é o toString
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())