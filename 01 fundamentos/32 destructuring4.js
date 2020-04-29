function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]   // se minimo form maior que max inverta o valor
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)   //floor arredonda para baixo
}

console.log(rand([50, 40]))   // passa somente os valores para o array
console.log(rand([992]))   // passa somente 1 valor onde ele assume que é menor que 1000
console.log(rand([, 10]))    // passa só o segundo valor considerando o vazio como 0
console.log(rand([]))      // pega todos os valores entre 0 e 1000
console.log(rand())    //da erro pois só vai destrusturar o valores de array