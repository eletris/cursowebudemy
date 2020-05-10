const _ = require('lodash')    //referencia  _ como a biblioteca só com lodash já vai incontrar a pasta node _module
setInterval(() => console.log(_.random(100, 500)), 2000)  //no caso o random já esta na biblioteca de lodashr

//outra biblioteca a ser instalada será com o comando
//sudo npm i -g nodemon        -- que sera instalada globalmente fora da pasta node. para utilizar dar o comando nodemon 04 usandoModulosTerceitos.js que é o arquivo


// foi criado um node modules com o camando de instalação npm i lodash dentro da pasta node.