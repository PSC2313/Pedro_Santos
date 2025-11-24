const imput = require("../input");

(async () => {
    let num = 0;
    let aleatorio = -1;
    for (i = 10; i >= 0 && num != aleatorio ; i--) {
        console.log("Digite um numero:");
        num = Number(await imput());
        aleatorio = Math.floor(Math.random() * 10);
        console.log("numero sorteado " + aleatorio);
        console.log();
        console.log(`Você tem ${i} tentativas`);
    } if (num != aleatorio) {
        console.log("Errou!!");
    } else {
        console.log("Acertou!!");
    }
})();