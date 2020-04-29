let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)    // a função com bind coloca ela dentro do contexto do obj ela não fica mais global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)   //com a função arrow o this não aponta para o global
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)   //
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)