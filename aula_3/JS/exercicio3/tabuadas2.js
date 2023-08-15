console.log("TABUADAS");


var multiplicador = 1;
var resultado = 0;
var cont = 1;
do{

while(cont <= 10){

    resultado = multiplicador * cont;
    console.log(multiplicador + " * " + cont + " = " + resultado);
    cont++;
}

console.log("xxx FIM DA TABUADA DO " + multiplicador);
multiplicador++;
cont = 1;
} while(multiplicador < 11);

var opc = window.prompt("Deseja outra tabuada?");
if (opc == "s"){
    location.reload();
}

console.log("FIM DA APLICAÇÃO");