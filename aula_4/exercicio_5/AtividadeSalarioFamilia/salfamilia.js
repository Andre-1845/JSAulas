var salarioBox = document.getElementById("salario");
var filhoBox = document.getElementById("filhos");
var nomeBox = document.getElementById("nome");
var calcularBox = document.getElementById("calcular");
var resultado = document.getElementById("resultado");

a = 806.8;
b = 1212.64;
valorA = 41.37;
valorB = 29.16;
cota = 1;


function validaFilhos(){
   var filhoValor = filhoBox.value;
  if (filhoValor < 0) {
    window.alert("Quantidade inválida!");
    filhoBox.style.backgroundColor = "yellow";
  
  } else {
    filhoBox.style.backgroundColor = "green";
    
  }
  return;
}

function validaSalario() {
  var salarioValor = salarioBox.value;
  if (salarioValor < 0) {
      window.alert("Valor inválido!");
      salarioBox.style.backgroundColor = "yellow";
    } else {
      salarioBox.style.backgroundColor = "green";
    
  }
  
  if (salarioValor < a) {
      cota = valorA;
    } else if (salarioValor < b) {
      cota = valorB;
    } else {
      cota = 1;
 }
  return;
}

filhoBox.addEventListener("blur", validaFilhos);
salarioBox.addEventListener("blur", validaSalario);
calcularBox.addEventListener("click", calcularSalario);


function calcularSalario() {
  var salarioFinal = filhoBox.value * cota;
  if (salarioBox.value > b){
    resultado.innerHTML = `Não faz jus a salario-familia`;
  } else{
    resultado.innerHTML = `O valor do Salario-familia é de ${salarioFinal}`;
    }
  
return;
}

//var inputSalario = document.querySelector("#salario");
//var inputFilhos = document.querySelector("#filhos");

// if (salarioBox.value === null || salarioBox.value === undefined)
