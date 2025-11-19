const input = require("../input");

(async () => {
    console.log("Digite um lado.");
    let l1 = Number(await input());
    console.log("Digite um outro lado.");
    let l2 = Number(await input());
    console.log("Digite o ultimo lado.");
    let l3 = Number(await input());

    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
        console.log("Algum dos lados não são um numero!!")
    } else if (l1 + l2 < l3 || l2 + l3 < l1 || l3 + l1 < l2) {
        console.log("Uso não forma um triangulo!!");
    } else if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
        console.log("Numeros menor que zero não são permitidos!!");
    } else if (l1 == l2 && l1 == l3) {
        console.log("Seu triangulo é equilatero");
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        console.log("Seu triangulo é isósceles");
    } else {
        console.log("Seu triangulo é escaleno");
    }

})();