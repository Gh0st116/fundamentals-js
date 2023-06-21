// parametros de funcao
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 50));
console.log(soma(-320, 740));

// parametros x argumentos

// ordem dos parametros
function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Juan", 20));

function multiplica(num1 = 0, num2 = 0) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));