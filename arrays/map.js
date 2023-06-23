const notas = [10, 9.5, 8, 7, 6];

// map pode possuir retorno que devolve um novo array
// deve ser utilizado quando desejamos redefinir um array
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);
