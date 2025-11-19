const input = require("../input");

( async ()=> {
    console.log("Qual sua idade?");
    let idade = Number(await input());

    if (idade >= 18) {
        console.log("Você tem idade.");
    } else {
        console.log("Você nâo tem idade o suficiente.");
    }
})();