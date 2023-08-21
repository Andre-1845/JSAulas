// REPLACE / REPLACE ALL

var textoTeste = "Hello world com replace";

console.log(textoTeste);
console.log(textoTeste.replace("Hello world", "Ola mundo"));

const cartao = "7474";

// const cartaoEscondido = cartao.padStart(16,"*");
const cartaoEscondido = cartao.padEnd(16,"*");

console.log(cartaoEscondido);

const aprovados = ['Mario','Joana','Roberto','Lucas','Otelo'];

const pesquisaNome = aprovados.indexOf('Otelo');
console.log(pesquisaNome);

// volta -1 se não encontrar nada

var loja = ['a','b','c','d','e'];

var pesquisaLoja = loja.includes('f');

console.log(pesquisaLoja);

// includes retorna false or true

// indexOf retorna indice
