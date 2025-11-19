const input = require("../input");

(async () => {
    console.log("Digite um numero.");
    let n = Number(await input());

    if (n % 2 != 0) {
        console.log("Numero impar!");
        console.log(`O numero ${n} é impar!`);
    } else if (n == 0) {
        console.log("É zero!");
    } else {
        console.log("É par!");
        console.log(`O numero ${n} é par!`);
    }
})();