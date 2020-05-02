// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa!  

const avo = { attr1: 'A' }  // tera somente o Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }  // para falar que avo é pai inclui __proto__: avo em seguinda os demais atributos
const filho = { __proto__: pai, attr3: 'C' }   // no attr 3 = C vai se sobresair o do pai que é 3
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // no caso ele vai procurar nos demais pais o atributo solicitado no attr0 ele vai pegar do avo onde foi que object.prototype = 0 

const carro = {   // cria o obj carro que será o prototipo
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {   // delta que é a diferença que quer acelerar
        if (this.velAtual + delta <= this.velMax) {   // se a velocidade atual + delta for menor = que velmax
            this.velAtual += delta    // vai incluir o valor de velatual em delta
        } else {
            this.velAtual = this.velMax   //se não for menor ou igual vel max vai colocar delta como velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`   //vai somente mostrar o valor atual do total que é velMax
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing que vai sobrepor o valor que foi definido no obj carro
}

const volvo = {
    modelo: 'V40',
    status() {   // vai dar shadowing na função do obj carro
        return `${this.modelo}: ${super.status()}`  // vai retornar somente o modelo desse obj e o super é para pegar a função status do obj carro que é o prototipo
    }
}

Object.setPrototypeOf(ferrari, carro)  // cria uma relação de prototypo entre 2 objetos ou seja ferrari tem como prototipo o carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)   // vai mostrar os atibutos de modelo e velmax
console.log(volvo)    // vai mostrar modelo e função declarada que a status de obj carro

volvo.acelerarMais(100)   // ira chamar a função que esta em obj carro dando velocidad de 100
console.log(volvo.status())   // informar o obj carro chamando a função status interna do obj volvo e status que é do obj carro

ferrari.acelerarMais(300)
console.log(ferrari.status())    //pega normalmente a vel do obj ferrari