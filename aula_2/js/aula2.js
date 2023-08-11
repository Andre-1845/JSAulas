
//if(true){
//    window.alert("Entrou no bloco IF");

//}
//else{
//    window.alert("Este é o bloco do ELSE");
//}

// MAIOR DE IDADE

var idade = Number(window.prompt("Digite idade"));

// isNaN verifica se a variável é "NaN"

if (idade <= 0 || isNaN(idade)){
    window.alert("Idade incorreta");
    // LOCATION.RELOAD serve para voltar a pagina 
    location.reload();
} else{
    if (idade >= 1 && idade <= 17){
    window.alert("Acesso não autorizado");
    location.reload();
    } else{
    window.alert("Acesso OK");
}
}