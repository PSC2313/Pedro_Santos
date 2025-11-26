const {escritaLeitura} = require("../pedro");

(async () => {
    let agenda = [];
    let continuar = "sim";
    let nome;
    let telefone;

    for (let i = 0; i < 5 && continuar == "sim"; i++) {
        nome = await escritaLeitura("Insira seu nome:");
        telefone = await escritaLeitura("Insira seu telefone:");

        agenda[i] = {
            nome: nome, //chave, valor
            telefone: telefone
        };
        continuar = await escritaLeitura("Deseja continuar? (sim)");
    };
    console.log(agenda);
})();