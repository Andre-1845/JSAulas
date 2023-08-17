var salarioBox = document.getElementById("salario");
var filhoBox = document.getElementById("filhos");
var nomeBox = document.getElementById("nome");
var calcularBox = document.getElementById("calcular");
var resultado = document.getElementById("resultado");

var a = 806.8;
var b = 1212.64;
var valorA = 41.37;
var valorB = 29.16;
var cota = 1;

filhoBox.addEventListener("blur", validaFilhos);
salarioBox.addEventListener("blur", validaSalario);
calcularBox.addEventListener("click", calcularSalario);

function validaFilhos() {
  var filhoValor = filhoBox.value;
  if (filhoValor < 0) {
    window.alert("Quantidade inválida!");
    filhoBox.style.backgroundColor = "yellow";
    // location.reload();
  } else {
    filhoBox.style.backgroundColor = "white";
    window.alert(filhoValor);
  }
  return;
}

function validaSalario() {
  var salarioValor = salarioBox.value;
  if (salarioValor < 0) {
    window.alert("Valor inválido!");
    salarioBox.style.backgroundColor = "yellow";
    // location.reload();
  } else {
    salarioBox.style.backgroundColor = "green";
    window.alert(salarioValor);
    //window.alert(filhoValor);
  }

  if (salarioValor < a) {
    cota = valorA;
  } else if (salarioValor < b) {
    cota = valorB;
  } else {
    cota = 1;
  }
  window.alert(cota);
  return;
}

function calcularSalario() {
  var salarioFinal = filhoBox.value * cota;
  // window.alert(filhoValor);
  // window.alert(cota);
  window.alert(salarioFinal);
  window.alert("oi");
  resultado.innerHTML = `O valor é de ${salarioFinal}`;
  return;
}

//var inputSalario = document.querySelector("#salario");
//var inputFilhos = document.querySelector("#filhos");

// if (salarioBox.value === null || salarioBox.value === undefined)
