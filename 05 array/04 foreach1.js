const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {   //para cade elemento do array percorrido pelo forEach ele chama um callback que e a função informada
    console.log(`${indice + 1}) ${nome}`)   //aqui ele ira mostrar o indice acrecentando 1 pois ele inicia em 0 em sequencia o nome que esta no indece
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)