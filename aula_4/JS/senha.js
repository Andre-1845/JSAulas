var senhaUser = "ADM";
var emailUser = "user@email.com";

var botaoLogar = document.getElementById("logar");
botaoLogar.addEventListener('click', validar);

function validar(){


    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;


    if (email === emailUser && senha === senhaUser){
        window.alert ("Login com SUCESSO");
        window.location.href = "https://www.google.com";
    } else{
        window.alert("Login ERRADO");
    }

}