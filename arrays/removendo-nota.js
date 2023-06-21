const notas = [10, 6, 8, 5.5, 10];
notas.pop();

let media = 0;

notas.forEach(nota => media += nota);

media /= notas.length;
console.log(media);