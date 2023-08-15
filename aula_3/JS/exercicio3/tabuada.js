console.log("TABUADAS");

var numero = window.prompt("Digite o número para a tabuada.");
var multiplicador = 1;
var resultado = 0;
for(var cont = 10; cont >0; cont--){
    multiplicador = 11 - cont;
    resultado = multiplicador * numero;
    console.log(multiplicador + " * " + numero + " = " + resultado);
}

console.log("xxx FIM DA TABUADA DO " + numero);

var opc = window.prompt("Deseja outra tabuada?");
if (opc == "s"){
    location.reload();
}

console.log("FIM DA APLICAÇÃO");