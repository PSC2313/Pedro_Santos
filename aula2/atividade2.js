const input = require('../input');

( async () =>{
    console.log("Digite um numero.");
    let n1 = Number(await input());

    console.log("Digite um segundo numero.");
    let n2 = Number(await input());

    console.log("O resultado é: " + (n1+n2));
    console.log(`A soma de ${n1} + ${n2} = ${n1+n2}`)
})();