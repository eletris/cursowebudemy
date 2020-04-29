function rand({ min = 0, max = 1000 }) {   // já passa 2 objetos para a função o max e min usando o destruct          
    const valor = Math.random() * (max - min) + min  // cria a variavel valor chamando função random de math que vai multiplicar e somar com min
    return Math.floor(valor)      // retorna o valor 
}

const obj = { max: 50, min: 40 }  // cria um obj informando os valore max e min
console.log(rand(obj))            // chama função random passando os valores que tem no obj
console.log(rand({ min: 955 }))   // chama função rand só determinando o valor min
console.log(rand({}))
console.log(rand())    // da problema pois não foi infomado os obj