console.log("teste");


// Caixas de texto (no navegador -- window) estão comentadas para não serem aplicadas...

// window.alert("alert mo JS");
// window.confirm("confirm OK");
// window.prompt("Digite seu nome");

// Variaveis

const numero = 10+5;
// variavel escopo global e não sobrescreve

var numero2 = 3;
// variavel escopo global

var x = numero + numero2;

let nome = "André";
// LET = variavel escopo LOCAL (só funciona no script enquanto ele está ativo)

console.log(nome);
// concatenar
window.alert(nome + " pronto");
 // usando crase, concatena dentro da expressão. Usar $ antes da variável
window.alert(`Teste , ${nome}`);

