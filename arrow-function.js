function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// arrow functions
const apresentarArrow = (nome) => `meu nome é ${nome}`; 
const soma = (num1, num2) => num1 + num2;

// arrow function com chaves
const somaNumPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
};

// hoisting: mesma forma que na forma como expressao