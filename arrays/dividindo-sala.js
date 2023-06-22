const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

const metadeTamanho = alunos.length / 2;

const salaUm = alunos.slice(0, metadeTamanho);
const salaDois = alunos.slice(metadeTamanho);

console.log(salaUm);
//  [
//     'João',      'Juliana', 
//     'Ana',       'Caio',                                             ys> 
//     'Lara',      'Marjorie',
//     'Guilherme', 'Aline',   
//     'Fabiana',   'Andre'    
//  ]

console.log(salaDois);
//  [
//     'Carlos',  'Paulo',
//     'Bia',     'Vivian',
//     'Isabela', 'Vinícius',
//     'Renan',   'Renata',
//     'Daisy',   'Camilo'
//  ]