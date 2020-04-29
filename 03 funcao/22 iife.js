// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()  // expressão é imediatamente invocada na execução.

// é utilizada para sair do escopo global tudo que estiver dentro da função fica isolada e nada externo terá acesso