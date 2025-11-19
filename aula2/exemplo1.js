const input = require('../input');  //const deixa a variável constante

(async () => {
    console.log("Digite seu nome: ");
    let nome = await input();

    console.log("Olá " + nome);
})();