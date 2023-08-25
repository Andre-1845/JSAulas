var botao = $("#mudaTema");
var textoArea = $("#areaTexto");

$("#mudaTema").on("click", function(){
    if(botao.hasClass("temaClaro")){

        $("#mudaTema").removeClass("temaClaro");
        $("#mudaTema").addClass("temaEscuro");
        textoArea.removeClass("temaClaro");
        textoArea.addClass("temaEscuro");
       
    }else{
        $("#mudaTema").removeClass("temaEscuro");
        $("#mudaTema").addClass("temaClaro");
        textoArea.removeClass("temaEscuro");
        textoArea.addClass("temaClaro");
    }
})