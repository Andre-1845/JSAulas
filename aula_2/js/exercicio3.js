var idade = Number(window.prompt("Digite a idade"));

    if (isNaN(idade)){
       alert("Numero invalido")
       location.reload();
    }
    if (idade < 15) {
        window.alert("Faixa etária : CRIANÇA");
    }
    if (idade >= 15 && idade < 30) {
        window.alert("Faixa etária : JOVEM");
    }
    if (idade > 30 && idade < 60) {
        window.alert("Faixa etária : ADULTO");
    } 
    if (idade >= 60) {
        alert("Faixa etária : IDOSO");
    }
     
    

var opc = window.prompt("Continua? (s/n)");
if (opc == "s"){
     location.reload();
}