function minhaFuncao(param) {
    console.log(param);
}

minhaFuncao("param");

// expressao de funcao
// const soma = function (num1, num2) { return num1 + num2 }
// console.log(soma(1, 1));

// diferenca principal : hoisting
// funcoes e var sao "listadas" no topo do arquivo
console.log(apresentar()); // funciona normalmente

function apresentar() {
    return "Olá!";
}

console.log(soma(1, 1)); // ReferenceError - funcao nao inicializada
const soma = function (num1, num2) { return num1 + num2 }
