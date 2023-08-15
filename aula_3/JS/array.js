

//METODO 1
var frutas = Array();
frutas[0] = "Morango";
frutas[1] = "abacaxi";
frutas[2] = "Maça";
frutas[3] = "banana";

console.log(frutas);

//METODO 2

var legumes = ["cenoura","batata","chuchu","abobora"];





// Comandos ARRAY

// Adicionar ao fim do ARRAY
frutas.push("Abacate");
console.log(frutas[1]);


//INSERIR NO COMEÇO DO ARRAY
frutas.unshift("laranja");
console.log(frutas);


//REMOVER DO FIM ARRAY
frutas.pop();
console.log(frutas);

//remover elementos no inicio do array
frutas.shift();
console.log(frutas);

// ADICIONAR ELEMENTOS NO MEIO DO ARRAY 
// SPLICE (indice, quantos indices sobrescreve, dados)
frutas.splice(1,0,"Goiaba");
console.log(frutas);

// SOBRESCREVE UM ELEMENTO

frutas[2] = "melao";
console.log(frutas);
