var salarioBox = document.getElementById("salario");
var filhoBox = document.getElementById("filhos");
var nomeBox = document.getElementById("nome");
var calcularBox = document.getElementById("calcular");
var resultado = document.getElementById("resultado");

var a = 806.80;
var b = 1212.64;
var valorA = 41.37;
var valorB = 29.16;
var cota = 1;

filhoBox.addEventListener('blur', validaFilhos);
salarioBox.addEventListener('blur', validaSalario);
calcularBox.addEventListener('onclick', calcularSalario);

function validaFilhos() {
  var filhoValor = filhoBox.value;
  if (filhoValor < 0) {
    window.alert("Quantidade inválida!");
    filhoBox.style.backgroundColor = "yellow";
    // location.reload();
  } else {
    filhoBox.style.backgroundColor = "white";
  }
}
function validaSalario() {
  var salarioValor = salarioBox.value;
  if (salarioValor < 0) {
    window.alert("Valor inválido!");
    salarioBox.style.backgroundColor = "yellow";
    // location.reload();
  } else {
    salarioBox.style.backgroundColor = "white";
    //window.alert(filhoValor);
    }

    if (salarioValor < a) {
      cota = valorA;
    } else if (salarioValor < b) {
      cota = valorB;
    } else {
      cota = 1;
    }
  
}

function calcularSalario() {
    window.alert("oi");
  //var salarioFinal = filhoValor * cota;
  //resultado.innerHTML`O valor é de ${salarioFinal}`;
}

//var inputSalario = document.querySelector("#salario");
//var inputFilhos = document.querySelector("#filhos");


// if (salarioBox.value === null || salarioBox.value === undefined)
