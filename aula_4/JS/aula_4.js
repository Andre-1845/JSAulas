// document.getElementById("teste").addEventListener('click', alerta );

var divTeste = document.getElementById("teste");

divTeste.addEventListener('click', alerta );
divTeste.addEventListener('mouseout', mudaDiv );
divTeste.addEventListener('mouseenter', function(){
    divTeste.style.backgroundColor = "black";
    divTeste.innerHTML = "Emtrou ma div";
    divTeste.style.fontSize = "40px";
    divTeste.style.width = "350px";
});

function alerta(){
    window.alert("Você clicou na DIV");

}

function mudaDiv(){
    divTeste.style.backgroundColor = "blue";
    // divTeste.innerText = "Você saiu";
    divTeste.innerHTML = "<b>TIROU TUDO</b>";
    divTeste.style.width = "200px";
}
