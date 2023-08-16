var nomeBox = document.getElementById("nomeBox");

//var nomeBox = document.querySelector("#nomeBox");

nomeBox.addEventListener('focus', foco);
nomeBox.addEventListener('focusout', corTexto);


function foco(){
    nomeBox.style.backgroundColor = "yellow";
}

function corTexto(){
    var textoTam = nomeBox.value.length;
    var resultado = document.querySelector("#resultado");

    if (nomeBox.value.length < 3){
        nomeBox.style.backgroundColor = "red";
        window.alert(textoTam);
    } else{
        nomeBox.style.backgroundColor = "green";
        window.alert(textoTam);
    }
    resultado.innerHTML = `O tamanho do texto é : ${textoTam}`;
}