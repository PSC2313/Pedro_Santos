const input = require("../input");

async function escritaLeitura(msg) {
    console.log(msg);
    return await input();;
};

function numAleatorio(limite) {
    let r = Math.floor(Math.random() * (limite + 1));
    return r;
}

module.exports = {
    escritaLeitura,
    numAleatorio
};
