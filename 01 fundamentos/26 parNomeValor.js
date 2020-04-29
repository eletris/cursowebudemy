// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao             // procura somente dentro desta função
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {       // notação literal de objetos
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)    //chama saudação externa
console.log(exec())      // chama o retorbo da função
console.log(cliente)     // mostra o conteudo do objeto cliente