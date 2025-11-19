const imput = require("../input");

(async () => {
    let num;
    let aleatorio;
    for (i = 10; i >= 0 && num != aleatorio ; i--) {
        console.log("Digite um numero:");
        num = Number(await imput());
        aleatorio = Math.floor(Math.random() * 10);
        console.log("numero sorteado " + aleatorio);
        console.log();
    } 
    if (num != aleatorio) {
        console.log("acertou!!");
    } else {
        console.log("Você errou!!");
        console.log(`Você tem ${i} tentativas`);
    }
})();
