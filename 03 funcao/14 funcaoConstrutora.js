function Carro(velocidadeMaxima = 200, delta = 5) {   //cria um objeto carro delta é aceleração
    // atributo privado
    let velocidadeAtual = 0      // atributo que só pertence ao objeto carro

    // metodo publico  ou seja uma função que pode ser chamada por qualquer lugar
    this.acelerar = function () {     // o this deixa acelerar global que vai realizar a aceleração
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {   //pode ser chamada para mostrar a velocidade
        return velocidadeAtual
    }
}

const uno = new Carro      // cria a const uno que recebe a classe carro que por padrão tem vel max 200 e aceleração 5
uno.acelerar()         // chama a função aceler que vai de 5 em 5 nesse caso
console.log(uno.getVelocidadeAtual())    // pega a velocidade atual do uno

const ferrari = new Carro(350, 20)   // aqui usa o objeto carro e define que ele vai ter vel max de 350 e acelerar de 20 em 20
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()     // aqui acelera 3 x = 60
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)