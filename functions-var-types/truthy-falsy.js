// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 -> false
// 1 -> true

console.log(0 == false); // true
console.log("" == false); // true
console.log(1 == true); // true

// null -> vazio
// undefined -> nao definido

let meuVar;
let varNull = null;

console.log(meuVar); // undefined
console.log(minhaNull); // null

let numero = 3;
let string = "Alura";

console.log(typeof numero); // number
console.log(typeof string); // string
console.log(typeof meuVar); // undefined
console.log(typeof varNull); // object
