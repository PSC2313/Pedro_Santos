let users = [];
//dicionario, ou objeto anonimo ou estrutura
let user1 = {
    nome: "Pedro",
    idade: 19
}
users[0] = user1;

users[1] = {
    nome: "Dafine",
    idade: 23
};
console.log(users[1].nome);// Dafine
console.log(users[1].idade);// 23
console.log(users[1]);// {nome: 'Dafine', idade: 23}
console.log(users[0].nome);// Pedro
console.log(users[0].idade);// 19
console.log(users[0]);// {nome: 'Pedro', idade: 19}
