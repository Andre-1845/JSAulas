$("#aumentar").on("click", function(){
    $("#caixa").animate({width: "500px", height: "500px"});
})

$("#diminuir").on("click", function(){
    $("#caixa").animate({width: "100px"}).animate({ height: "200px"});
})

// var desloc = $("#deslocamento").val;


$("#direita").on("click", function(){
    
    $("#caixa").animate({marginLeft: "400px"},{duration: 1200, complete: ()=>alert("acabou")});
})
$("#esquerda").on("click", function(){
    
    $("#caixa").animate({marginLeft: "0px", marginTop: "200px"},{duration: 600, complete: ()=>alert("acabou")});
})
$("#sumir").on("click", function(){
    
    //$("#caixa").fadeOut(200);
     $("#caixa").slideUp(800);
})
$("#aparecer").on("click", function(){
    
    //$("#caixa").fadeIn(800); pode ser esse comando ou o slide

   $("#caixa").slideDown(200);
})
$("#hide").on("click", function(){
    
    //$("#caixa").fadeOut(200);
     $("#caixa").hide(500);
})
$("#show").on("click", function(){
    
    //$("#caixa").fadeIn(800);
   $("#caixa").show(500);
})
$("#trocar").on("click", function(){
    $("#caixa").fadeToggle(500);
})
$("#trocarSlide").on("click", function(){
    $("#caixa").slideToggle(500);
})

// adicionar ATRIBUTOS

$("#desativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled", "true");
})
$("#css").on("click", function(){
    $("#caixaDeTexto").css("background-color", "red");
})
$("#zerar").on("click", function(){
    $("#caixaDeTexto").css("background-color", "white");
    $("#caixa").animate({width: "200px"}).animate({ height: "200px"});
    $("#caixaDeTexto").attr("disabled", "false");
    $("#caixa").animate({marginLeft: "0px", marginTop: "0px"},{duration: 200, complete: ()=>alert("zerado")});

})



