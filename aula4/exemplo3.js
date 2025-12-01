const imput = require("../input");

(async () => {
    let num;
    let aleatorio;
    do { // executa pelomenos uma vez
        console.log("Digite um numero!");
        num = Number(await imput());
        aleatorio = Math.floor(Math.random()*10); // gerando um numero aleatorio
        console.log("Numero sorteado: "+ aleatorio);
    } while (num != aleatorio);
    console.log("Acertou!!");
})();