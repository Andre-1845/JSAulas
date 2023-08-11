window.alert("Divide conta");

let conta = Number(window.prompt("Valor da conta:"));
let pessoas = Number(window.prompt("Quantidade de pessoas: "));
let divisao = (conta / pessoas).toFixed(2);

window.alert(`O valor para cada pessoa é ${divisao}`);

