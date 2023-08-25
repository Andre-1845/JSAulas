var resultadoDiv = document.querySelector("#resultado")

$("#calcular").on('click', function(){
    var inputValue = Number($("#tabuadaNumero").val());
    var contador = 1;
    resultadoDiv.innerHTML = `Tabuada de ${inputValue}<br>`
    //resultadoDiv.innerHTML += `${contador} x ${inputValue} = ${contador * inputValue}` <br>

    // alert(contador*inputValue);

    while(contador <= 10){
        resultadoDiv.innerHTML += `${contador} x ${inputValue} = ${contador * inputValue}<br>`
        contador++;
    }
});