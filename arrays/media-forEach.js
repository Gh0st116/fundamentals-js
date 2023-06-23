const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach nao tem retorno e nao altera o array original
notas.forEach((nota) => {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);
