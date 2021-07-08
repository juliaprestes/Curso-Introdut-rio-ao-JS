console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis.");
console.log(listaDeDestinos);
/* 
if(idadeComprador >18){
    listaDeDestinos.splice(1,1); // splice para reduzir cidade
    console.log("Comprador maior de idade");
} else if(estaAcompanhada){
        console.log("Comprador esta acompanhado!");
        listaDeDestinos.splice(1,1); // splice para reduzir cidade
} else {
        console.log("não é maior de idade e não esta acompanhado.")
    }
console.log(listaDeDestinos);
 */

if (idadeComprador > 18 || estaAcompanhada == true) {
    listaDeDestinos.splice(2, 1); // splice para reduzir cidade
    console.log("Boa viagem!");
} else {
    console.log("não é maior de idade e não esta acompanhado.")
}

console.log("Embarque:\n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar!")
}

console.log(listaDeDestinos);