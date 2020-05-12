// let e const
{
    var a = 2
    let b = 3
    console.log(b) // aqui le normal
}
console.log(a)  //consegue pegar o mas b não pois let é de bloco

// Template String
const produto = 'iPad'  
console.log(`${produto} é caro!`)   // produto é interpolado com ${}

// Destructuring
const [l, e, ...tras] = "Cod3r" // o c vai ser atribuido em l, o em e e as demais em tras
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }  //tira de um obj e atribui em const
console.log(i, nome)