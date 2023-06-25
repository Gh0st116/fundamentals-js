// Não usar require, trocar por:
// import dados from "./cliente.json"
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados); // object

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString); // string

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);