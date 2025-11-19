const imput = require("../input");

(async () => {
    do {
        console.log("Digite um numero!");
        num = Number(await imput());
    } while (num != 7);
})();