Array.prototype.forEach2 = function(callback) {    //simula um for each que é armazenado num prototipe do array que chamara a função callback
    for (let i = 0; i < this.length; i++) {   // para (contador que começa com 0; e que seja menos que o length do array; adicionar um no contador)
        callback(this[i], i, this)  // que recebe os valores do indice, conteudo , e proprio array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})