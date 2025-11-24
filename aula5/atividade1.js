const imp = require("../input");

(async () => {
    let agenda = [];
    let continuar = "sim";
    let nome;
    let telefone;

    for (let i = 0; i < 5 && continuar == "sim"; i++) {
        console.log("Insira seu nome:");
        nome = await imp();
        console.log("Insira seu telefone:");
        telefone = await imp();

        agenda[i] = {
            nome: nome, //chave, valor
            telefone: telefone
        };

        console.log("Deseja continuar? (sim)");
        continuar = await imp();
    };
    console.log(agenda);
})();