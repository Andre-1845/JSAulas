window.alert("Calculadora");

const numero1 = Number(window.prompt("Numero 1: "));
if (isNaN(numero1)){
    location.reload();
}
const operador = window.prompt("Operação: ");
const numero2 = Number(window.prompt("Numero 2: "));
if (isNaN(numero2)){
    location.reload();
}

switch(operador){
    case "+" :
    case "somar": 
        resultado = numero1 + numero2;
        break
    case "-" : 
        resultado = numero1 - numero2;
        break
    case "*" : 
        resultado = numero1 * numero2;
        break
    case "/" : 
        resultado = numero1 / numero2;
        break
    case "**" : 
        resultado = numero1 ** numero2;
        break
    case "raiz2" : 
        resultado = numero1 ** (1/numero2);
        break
    default: 
        window.alert("Operador invalido");
        location.reload();
        break
   
}

// window.alert(`O resultado é ${resultado}`);

window.alert("Resultado: " + resultado );

location.reload();