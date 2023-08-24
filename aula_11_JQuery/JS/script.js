

// com a funcao text o jQuery çista o valor. Se for colocado um valor dentro da funcao ("Oi"), ele sobrescrev o valor.

// var textoPagina = jQuery("#textoPagina").text("Oi");
var textoPagina = jQuery("#textoPagina").text();

// a palavra JQuery pode ser substituida por $
var tituloPagina = $("#tituloPagina").text("Modificado");

var nomeUsuario = "Andre";

// se a variavel nomeUsuario não estiver definida, o script continua funcionando.

var usuarioHTML = $("#usuario").text(nomeUsuario);

console.log(textoPagina);
console.log(tituloPagina);

// split
// split divide a variavel texto com o caracter que for definido entre parenteses.
var textoPaginaConta = textoPagina.split(" ").length;
var qntPalavras = $("#numPalavras").text(textoPaginaConta);

// contagem dinamica

var areaTexto = $("#areaTexto");

// window.alert("teste window");

// on = addEventListener
// posso usar com CLICk ou INPUT

areaTexto.on("input", function contarPalavras(){
    var areaTextoValor = areaTexto.val();
    var areaTextoPalavras = areaTextoValor.split(/\S+/).length -1;
    $("#numPalavras").text(areaTextoPalavras);

    var areaTextoCaracteres = areaTextoValor.length;
    $("#numCaracteres").text(areaTextoCaracteres);
    

});

    areaTexto.on("click", function(){
        areaTexto.addClass("temaDark");
        //areaTexto.toggleClass("temaDark");

    });

    // TOGGLE serve como addClass mas já RETIRA a classe anterior. Abaixo ele serve para substituir os dois comandos

    areaTexto.on("focusout", function(){
        // areaTexto.removeClass("temaDark");
        // areaTexto.addClass("temaLight");
        areaTexto.toggleClass("temaLight");

    });

//areaTexto.on("input", function ordenarPalavras(){
 //   var areaTextoPalavras = areaTexto.text();
//    var areaTextoPal = areaTextoValor.split(/\S+/);
//    console.log(areaTextoPalavras);
    //$("#numPalavras").text(areaTextoPalav);

//});



// .text retorna string
// .val retorna valor
//classlist




