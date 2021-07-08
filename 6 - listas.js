console.log("Trabalhando com listas");

// const salvador= ;
// const saoPaulo = 
// const rioDeJaneiro = `

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);
listaDeDestinos.push(`Curitiba`); //adicionando itens na lista
console.log("Destinos possíveis.");
//console.log(salvador,saoPaulo,rioDeJaneiro);


console.log(listaDeDestinos);
listaDeDestinos.splice(1, 1); // splice para reduzir cidades
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);