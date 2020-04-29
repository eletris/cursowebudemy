// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))  //pegou no indice 0 a função que retorna uma soma

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())    // chama função dentro do objeto

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)    //informa os 2 valores a e b depois informa o valor de c
const cincoMais = soma(2, 3)  // grava o a e b em uma constante 
cincoMais(4)    //com a contante que tem a função a e b