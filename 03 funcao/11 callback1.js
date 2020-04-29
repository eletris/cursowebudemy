const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {    
    console.log(`${indice + 1}. ${nome}`)  // dar o valor do indice com o nome que esta nele
}

fabricantes.forEach(imprimir)   // o forEach é uma função de array que para cada elemento do array ele chama uma função
fabricantes.forEach(fabricante => console.log(fabricante))