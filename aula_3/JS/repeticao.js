// REPETIÇÕES

// TODOS OS EXEMPLOS SÃO EXIBIDOS NO CONSOLE (  apertar F12 na janela do navegador )

var contador1 = 0;
var final = 12;
final = window.prompt("qual o numero final?");
console.log("inicio");

while(contador1<=final){
    console.log(contador1);
    
    contador1++;
}
console.log("Saiu do WHILE");

console.log("deseja continuar?");

var opc = window.prompt("sim ou nao");

if(opc == "s"){
   
    location.reload();
}

console.log("xxxx    FIM    XXXXX");


// DO WHILE
var soma = 0;
var contador2 = 0;
var final = 12;
final = window.prompt("qual o numero final?");
console.log("inicio DO WHILE");
do{
console.log(contador2);
    
    contador2++;

    soma = soma + contador2


}while(contador2<=final);
console.log("Saiu do DO WHILE");
console.log(`Soma : `, soma);

console.log("deseja continuar?");

var opc = window.prompt("sim ou nao");

if(opc == "s"){
   
    location.reload();
}

console.log("xxxx    FIM    XXXXX");


// FOR

for(var cont3 = 10; cont3 >=0 ; cont3--){
    console.log(cont3);
}

console.log("fim for");

// FOR EACH

var exemplo = ["a", "b","c","d","e","f"];

exemplo.forEach((element) => console.log(element));
console.log("Fim do forEach simples");

console.log ("For Each com chaves")
var cont2 = 0;
exemplo.forEach((element) =>{
    console.log(element);
    cont2++;

});
console.log(cont2);

console.log("WHILE com LENGTH");

var cont4 = 0;
var exemplo2 = ["A1","A2","A3","A4","A5"];

while(cont4 <exemplo2.length){
    console.log(exemplo2[cont4]);
    cont4++;
}
console.log(`CONT4 = `, cont4);
