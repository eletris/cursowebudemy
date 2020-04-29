function tratarErroELancar(erro) {     // função chamada pelo catch
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {                                              // o erro esta em name
        console.log(obj.name.toUpperCase() + '!!!')   // da erro no try joga no catch
    } catch (e) {
        tratarErroELancar(e)          // que chama a função tratar Erro
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }        // como esta nome dar o erro pq foi declarado como name no try
imprimirNomeGritado(obj)