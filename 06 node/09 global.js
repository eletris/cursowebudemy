// console.log(global)  //qualquer arquivo vai ler isso
global.MinhaApp = Object.freeze({   //aqui com o freeze deixa ele não editavel
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})