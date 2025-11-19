const imput = require("../input");

(async () => {
    let num;
    let aleatorio;
    let chance = 10;

    do { // do while é usado para executar e depois testar
        console.log("Digite um numero!");
        num = Number(await imput());
        aleatorio = Math.floor(Math.random() * 10); // gerando um numero aleatorio
        console.log("Numero sorteado: " + aleatorio);
        chance = chance - 1;
        console.log(`Você ainda tem ${chance} tentativas!`);
        console.log("");
    } while (num != aleatorio && chance > 0);

    if (chance == 0 && num != aleatorio) {
        console.log("Você errou!!");
    } else {
        console.log("acertou!!");
    }
})();