// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {   // ctx é o contexto um objeto que sera passsado de um passo para o outro que contem dados a ser passados entre os passos. next é a função chamada para passar para o proximo passo
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //vai receber o contexto ctx, e as funções middleware em sequecia que vão ser realizadas se passo2, passo1 e etc
    const execPasso = indice => { // cria uma outra função que vai receber o indice da função middleware que foi informada em exec já que o ...middlewares cira um array com as funções informadas executando na ordem
        middlewares && indice < middlewares.length &&  //se a função informada e o seu indice for menor que o tamnaho total de indices declarados no array  
            middlewares[indice](ctx, () => execPasso(indice + 1))  // a passando o contexto em sequcnia chama a propria função execPasso que informa o indice + 1
    }
    execPasso(0)
}

const ctx = {}   // criando um objeto que é o contexto que vai aramazenar os results realizados na função exec
exec(ctx, passo1, passo2, passo3)  //então chama a função exec passando o ctx em sequncia os passos que ele vai seguir... se começar com o passo3 como ele não tem o next ele não chama os outros 2 caso informados.
console.log(ctx)