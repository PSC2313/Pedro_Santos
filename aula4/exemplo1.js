const imput = require("../input");

(async () => {
    while (true) {
        console.log("Digite um numero!");
        let num = Number(await imput());

        if (num == 7) {
            console.log("Acertou!!");
            break;
        }
    }
})();   