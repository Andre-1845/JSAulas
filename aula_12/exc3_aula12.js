var areaTexto = $("#areaTexto");
// on = addEventListener
areaTexto.on("input", function(){
    var areaTextoValor = areaTexto.val()
    var areaTextoPalavras = areaTextoValor.split(/\S+/).length -1;
    $("#numPalavras").text(areaTextoPalavras);

    var areaTextoCaracteres = areaTextoValor.length;
    $("#numCaracteres").text(areaTextoCaracteres);
});
