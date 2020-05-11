require('./global')  //vai pegar o que foi incluido em global

console.log(MinhaApp.saudacao())  // chama a função que esta no arquivo global

MinhaApp.nome = 'Eita!'  //vc consegue alterar o que esta no global então é bom colocar o freeze
console.log(MinhaApp.nome)