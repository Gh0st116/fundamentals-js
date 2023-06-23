const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// o retorno do callback inserido no filter deve retornar um boolean
// true => elemento é repassado para a nova lista
// false => elemento nao é repassado

// NOTA: ja que o elemento aluno nao é utilizado, substitua por _ e utilize o indice normalmente 
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);
