const imput = require("../input");

(async () => {
    while (num != 7) {
        console.log("Digite um numero!");
        var num = Number(await imput());

        if (num == 7) {
            console.log("Acertou!!");
        }
    }
})();