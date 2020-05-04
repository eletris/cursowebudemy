class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)   //que vai pegar do avo
        this.profissao = profissao   // o profissão é somente do pai
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')   //informa só o sobrenome de pai e por padrão pega profissoa de pai
    }
}

const filho = new Filho   // criado uma nova clase filho armazenando na const filho
console.log(filho)