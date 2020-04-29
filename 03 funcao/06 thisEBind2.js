function Pessoa() {
    this.idade = 0

    const self = this  // como essa linha esta dentro da função pessoa o this será dela
    setInterval(function() {   // set interval é uma função que dispara a que esta dentro em determinado tempo como mostra no final 1000 milisegundos e vai repetindo
        self.idade++        // se colocar this.idade ele vai buscar idade dentro da function de set interval
        console.log(self.idade)
    }/*.bind(this)*/, 1000)    // colando esse bind ele resolve se this.idade
}

new Pessoa