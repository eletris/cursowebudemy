console.log(Math.ceil(6.1))  //arredondamento para cima deil é uma função do objeto Math

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'    equivalente ao de cima
console.log(obj1.nome)   //mostra o item nome do obj1

function Obj(nome) {             // função obj onde tera o parametro nome
    this.nome = nome             // define a chave nome como publica 
    this.exec = function() {       // cria uma função publica que ao ser chama imprime o texto
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')     // cria um novo obj com as especifiçoes da função OBJ anterior onde sera atribuido cadeira no campo nome dela.
const obj3 = new Obj('Mesa')
console.log(obj2.nome)     // mostra o que foi gravado no obj2 chave nome
console.log(obj3.nome)
obj3.exec()             