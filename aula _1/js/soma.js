window.alert("Script para somar");

let numero1 = window.prompt("Numero 1");
let numero2 = window.prompt("Numero 2");

// o prompt gera um STRING. Para numero, é preciso converter

const soma = numero1 + numero2;

window.alert(`Soma = ${soma}`);

// o parseInt converte para numero inteiro

let numero3 = parseInt(window.prompt("Numero 3"));
let numero4 = parseInt(window.prompt("Numero 4"));

const soma2 = numero3 + numero4;

window.alert(`Soma = ${soma2}`);